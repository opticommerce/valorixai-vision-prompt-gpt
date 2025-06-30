import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/utils/firebase';
import AuthForm from '@/components/Auth/AuthForm';
import { useAuth } from '@/contexts/AuthContext';

const Signup = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [error, setError] = useState('');


  console.log("[Signup] Render:", { user, loading });

  const handleSignup = async (email: string, password: string) => {
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/prompt');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full">
        <AuthForm type="signup" onSubmit={handleSignup} />
        {error && (
          <p className="mt-4 text-center text-red-500 font-medium">{error}</p>
        )}
      </div>
    </div>
  );
};

export default Signup;