import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout(props) {
  return (
    <div
      style={{
        backgroundColor: "gainsboro",
        fontSize: "1.25vw",
      }}
    >
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}
