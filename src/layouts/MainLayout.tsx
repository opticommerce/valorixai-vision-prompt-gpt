import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar showMenu={true} showHomeLink={true} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;