"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

function Home() {
  useGSAP(() => {
    gsap.to(".stager-box", {
      y: 250,
      rotation: 360,
      borderRadius: "100%",
      repeat: -1,
      yoyo: true,
      duration: 2,
      stagger: {
        amount: 0.5,
        grid: [1, 1],
        axis: "y",
        ease: "circ-inOut",
        from: "center",
      },
    });
  }, []);
  return (
    <div className="h-screen w-full flex justify-center items-center gap-3">
      <div
        id="#green-box"
        className="h-32 w-32 bg-indigo-200 rounded-lg stager-box"
      ></div>
      <div
        id="#green-box"
        className="h-32 w-32 bg-indigo-300 rounded-lg stager-box"
      ></div>
      <div
        id="#green-box"
        className="h-32 w-32 bg-indigo-400 rounded-lg stager-box"
      ></div>
      <div
        id="#green-box"
        className="h-32 w-32 bg-indigo-500 rounded-lg stager-box"
      ></div>
      <div
        id="#green-box"
        className="h-32 w-32 bg-indigo-600 rounded-lg stager-box"
      ></div>
    </div>
  );
}

export default Home;
