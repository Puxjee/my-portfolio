"use client";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--color-background)] text-[var(--color-gray)]">
      <div className="max-w-6xl mx-auto px-6 py-8 md:flex md:items-start md:justify-between">
        <div className="flex flex-col md:flex-row md:items-center md:gap-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="flex flex-col leading-tight">
              <span className="text-white/90 font-semibold">Melek</span>
              <a
                href="mailto:elias@elias-dev.ml"
                className="text-[var(--color-gray)] text-sm hover:text-white"
              >
                melekelmokhtar@gmail.com
              </a>
            </div>
          </div>

          <div className="md:block hidden pl-1">
            <div className="text-[var(--color-gray)] text-sm">
              Fullstack web developer
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-purple-400">
        <div className="max-w-6xl mx-auto px-6 py-4 text-center text-[var(--color-gray)] text-sm">
          © Copyright 2025. Made by Melek
        </div>
      </div>
    </footer>
  );
};

export default Footer;
