import { useState, useEffect, useRef } from "react";
import React from "react";

import Orb from "../spa/Orb";

export default function HeroSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationId;
    const animate = () => {
      // 3D animation logic would go here
      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="relative pt-20 md:pt-0 min-h-screen flex items-center bg-gray-900">
      {/* 3D background canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-transparent opacity-90"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="w-full pl-10 md:w-1/2 pt-16 md:pt-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Transforming Ideas Into
              <br />
              <span className="text-blue-400">Digital Excellence</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg text-gray-300">
              Full-service digital marketing solutions for startups and small
              businesses. Elevate your brand with our expert services.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-6 py-3 rounded-lg font-medium bg-blue-500 hover:bg-blue-600 text-white transition-colors text-lg">
                Get Started
              </button>
              <button className="px-6 py-3 rounded-lg font-medium bg-transparent border border-white hover:bg-gray-800 text-white transition-colors text-lg">
                Our Services
              </button>
            </div>
          </div>

          {/* Right Orb / Logo */}
          <div className="w-full md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-blue-500 opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-purple-500 opacity-20"></div>

              <div className="p-5 md:p-20">
                <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden mx-auto">
                  <Orb hue={220} hoverIntensity={0.2} rotateOnHover={true} />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <img
                      src="/logo.png"
                      alt="Logo"
                      className="w-50 h-50 md:w-100 md:h-100 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted Brands
        <div className="mt-16 md:mt-2">
          <p className="text-center text-sm uppercase mb-4 text-gray-400">
            Trusted by innovative brands
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="h-8 w-24 rounded bg-gray-700 opacity-50"></div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
