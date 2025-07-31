"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const titles = ["Software Developer", "Data Science Enthusiastic", "AWS Certified Cloud Practitioner", "M E R N Stack"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        setFade(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="px-8 py-16 flex flex-col md:flex-row items-center"
      style={{
        background: "linear-gradient(to bottom, #0D1B2A, #1B263B)",
        color: "white",
      }}
    >
      <div className="flex-1 max-w-xl space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold">
          Hello, I'm <span style={{ color: "#B8860B" }}>Atharva Chaudhari</span> !!!
        </h2>

        <h3
          className={`text-2xl font-semibold transition-all duration-500 ease-in-out`}
          style={{
            opacity: fade ? 1 : 0,
            transform: fade ? "translateX(0)" : "translateX(20px)",
          }}
        >
          {titles[currentTitleIndex]}
        </h3>

        <p
          style={{
            borderLeft: "4px solid white",
            paddingLeft: "12px",
            color: "white",
          }}
        >
          
        </p>
      </div>

      <div className="mx-auto mt-12 md:mt-0 md:ml-auto shadow-lg">
        <Image
          src="/profile.jpg"
          alt="Atharva Chaudhari"
          width={415}
          height={300}
          style={{
            //borderRadius: "12px",
            border: "2px solid #B8860B",
            boxShadow: "0 0 8px rgba(184, 134, 11, 0.4)",
            objectFit: "cover",
            backgroundColor: "#0D1B2A",
          }}
          className="shadow-lg"
          priority
        />
      </div>
    </section>
  );
}
