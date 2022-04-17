import React from "react";
import Header from "./header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./footer";

export default function MainLayout(props) {
  const location = useLocation();
  return (
    <>
      <Header />
      <div className="bg-neutral-content" style={{ minHeight: "100vh" }}>
        <div className="max-w-4xl mx-auto">
          <Outlet />
        </div>
      </div>
      {location.pathname.includes("post") ? null : <Footer />}
    </>
  );
}
