import React from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import HelpCenter from "./pages/HelpCenter";
import Terms from "./pages/Terms";
import Tutorials from "./pages/Tutorials";
import Contact from "./pages/Contact";
import PromptPage from "./pages/PromptPage"; // Importa la pagina del prompt builder
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Examples from "./pages/examples";
import MainLayout from "./layouts/MainLayout";
import MinimalLayout from "./layouts/MinimalLayout";

function App() {
  console.log("⚡ App montata");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/help-center" element={<MainLayout><HelpCenter /></MainLayout>} />
        <Route path="/terms" element={<MainLayout><Terms /></MainLayout>} />
        <Route path="/privacy-policy" element={<MainLayout><PrivacyPolicy /></MainLayout>} />
        <Route path="/tutorials" element={<MainLayout><Tutorials /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/prompt-builder" element={<MinimalLayout><PromptPage /></MinimalLayout>} />
        <Route path="/examples" element={<MainLayout><Examples /></MainLayout>} />
        <Route path="*" element={<div>404 - Pagina non trovata</div>} />
      </Routes>
    </Router>
  );
}

export default App;
