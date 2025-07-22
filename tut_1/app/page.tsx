"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Home() {
  useGSAP(() => {
    gsap.to("#blue-box", {
      // GSAP.to() is used to take the element from current state to new state
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "power1.inOut",
    });
  }, []);

  useGSAP(() => {
    gsap.from("#green-box", {
      // GSAP.to() is used to take the element from new state to current state
      x: 250,
      repeat: -1,
      rotation: 360,
      duration: 2,
      ease: "power1.inOut",
    });
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "#red-box",
      {
        x: 0,
        borderRadius: "0%",
        rotation: 0,
      },
      {
        x: 250,
        borderRadius: "100%",
        rotation: 360,
        yoyo: true,
        duration: 2,
        ease: "bounce.out",
        repeat: -1,
      }
    );
  }, []);

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex gap-10 flex-col">
        <div id="blue-box" className="w-40 h-40 bg-sky-500 rounded-xl"></div>
        <div id="green-box" className="w-40 h-40 bg-green-500 rounded-xl"></div>
        <div id="red-box" className="w-40 h-40 bg-red-500 rounded-xl"></div>
      </div>
    </div>
  );
}

export default Home;
