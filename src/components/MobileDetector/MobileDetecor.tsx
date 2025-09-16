"use client";
import React, { useState, useEffect } from "react";
import {
  Monitor,
  Smartphone,
  Mail,
  Github,
  Linkedin,
  Phone,
} from "lucide-react";

const MobileDetector = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileKeywords = [
        "android",
        "webos",
        "iphone",
        "ipad",
        "ipod",
        "blackberry",
        "windows phone",
      ];
      const isMobileUserAgent = mobileKeywords.some((keyword) =>
        userAgent.includes(keyword)
      );
      const isMobileScreen = window.innerWidth <= 768;

      return isMobileUserAgent || isMobileScreen;
    };

    const handleResize = () => {
      setIsMobile(checkIfMobile());
    };

    // Initial check
    setIsMobile(checkIfMobile());
    setIsLoading(false);

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#011627] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C778DD]"></div>
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className="min-h-screen bg-[#011627] flex flex-col items-center justify-center p-6 text-center">
        {/* Animated background pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-[#C778DD]/10 to-transparent animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-[#77a2d1]/10 to-transparent animate-pulse delay-1000"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10 max-w-md mx-auto">
          {/* Icon section */}
          <div className="flex items-center justify-center mb-8 space-x-4">
            <div className="relative">
              <Monitor
                size={48}
                className="text-[#C778DD] animate-bounce"
                style={{ animationDelay: "0s" }}
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
            </div>
            <div className="text-gray-400 text-2xl">+</div>
            <Smartphone size={48} className="text-gray-600 opacity-50" />
          </div>

          {/* Main message */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-white font-mono">
              Desktop <span className="text-[#C778DD]">Only</span>
            </h1>

            <div className="bg-[#1e2d3d] border border-[#C778DD]/30 rounded-lg p-6">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Hey there! 👋
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                My portfolio is designed for the full desktop experience. Please
                open this website on a PC or laptop to explore my work properly.
              </p>
              <div className="flex items-center justify-center space-x-2 text-[#C778DD] text-sm">
                <Monitor size={16} />
                <span>Best viewed on desktop</span>
              </div>
            </div>

            {/* Quick info section */}
            <div className="bg-[#1a252f] border border-gray-700 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-3 text-sm">
                Quick Info:
              </h3>
              <div className="space-y-2 text-xs">
                <p className="text-gray-300">
                  <span className="text-[#C778DD]">Name:</span> Melek ElMokhtar
                </p>
                <p className="text-gray-300">
                  <span className="text-[#C778DD]">Role:</span> Full-Stack
                  Developer
                </p>
                <p className="text-gray-300">
                  <span className="text-[#C778DD]">Location:</span> Tunisia
                </p>
                <p className="text-gray-300">
                  <span className="text-[#C778DD]">Focus:</span> Modern Web
                  Applications
                </p>
              </div>
            </div>

            {/* Contact links */}
            <div className="bg-[#1a252f] border border-gray-700 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-3 text-sm">
                Quick Contact:
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="mailto:melekelmokhtar@gmail.com"
                  className="flex items-center space-x-2 text-orange-300 hover:text-orange-200 transition-colors text-xs p-2 rounded hover:bg-[#2a3441]"
                >
                  <Mail size={14} />
                  <span>Email</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/melekelmokhtar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-300 hover:text-blue-200 transition-colors text-xs p-2 rounded hover:bg-[#2a3441]"
                >
                  <Linkedin size={14} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Puxjee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-gray-200 transition-colors text-xs p-2 rounded hover:bg-[#2a3441]"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
                <a
                  href="tel:+21698701740"
                  className="flex items-center space-x-2 text-green-300 hover:text-green-200 transition-colors text-xs p-2 rounded hover:bg-[#2a3441]"
                >
                  <Phone size={14} />
                  <span>Call</span>
                </a>
              </div>
            </div>

            {/* Footer note */}
            <div className="text-xs text-gray-500 mt-6">
              <p>
                Thank you for your interest!{" "}
                <span className="text-red-400">♥</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return children;
};

export default MobileDetector;
