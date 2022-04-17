import React from "react";
import Header from "./header";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

export default function MainLayout(props) {
  return (
    <>
      <Header />
      <div className="bg-neutral-content" style={{ minHeight: "100vh" }}>
        <div className="max-w-4xl mx-auto">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}
