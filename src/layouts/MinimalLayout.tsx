import React from "react";
import Navbar from "../components/Navbar";

const MinimalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar showMenu={false} />
      <main className="bg-white dark:bg-[#121212] text-black dark:text-white min-h-screen">
        {children}
      </main>
    </>
  );
};

export default MinimalLayout;