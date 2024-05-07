import React from "react";
import Navbar from "./navbar";
interface layoutType {
  children: React.ReactNode;
}

const Layout = ({ children }: layoutType) => {
  return (
    <>
      <div>
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
