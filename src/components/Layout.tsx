import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background font-inter">
      <Navbar showMenu={true} showHomeLink={true} />
      <main className="flex-1 pt-24"> {/* pt-24 to offset fixed navbar height */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
