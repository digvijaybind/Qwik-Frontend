"use client";
import React, {useEffect} from "react";
import Logo from "../../public/images/logo.png";
import Image from "next/image";

const Loader = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);
  return (
    <div
      style={{
        display: "flex",
        background: "black",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Image src={Logo} style={{height: "100px", width: "200px"}} />
    </div>
  );
};

export default Loader;
