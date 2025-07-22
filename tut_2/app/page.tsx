"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

function Home() {
  const timeline = gsap.timeline({
    repeat: -2,
    yoyo: true,
    repeatDelay: 1,
  });

  useGSAP(() => {
    timeline.to("#red-box", {
      x: 0,
      rotation: 0,
      borderRadius: "0%",
    });

    timeline.to("#red-box", {
      y: 50,
      rotation: 360,
      borderRadius: "100%",
      ease: "back.inOut",
      duration: 2,
    });
    timeline.to("#red-box", {
      y: -250,
      scale: 2,
      rotation: 360,
      borderRadius: "100%",
      ease: "back.inOut",
      duration: 2,
    });
  }, []);
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div id="red-box" className="h-32 w-32 rounded-xl bg-red-500"></div>
    </div>
  );
}

export default Home;
