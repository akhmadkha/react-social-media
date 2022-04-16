import React from "react";
import Header from "./header";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

export default function MainLayout(props) {
  return (
    <>
      <Header />
      <div style={{ minHeight: "100vh" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
