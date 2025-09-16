import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const HangingSocials = () => {
  return (
    <div className="fixed left-4 top-16 z-30 flex flex-col items-center select-none">
      <div className="w-px h-24 bg-[#ABB2BF]" />

      <div className="flex flex-col items-center gap-4 py-3">
        <a
          href="https://github.com/Puxjee"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray hover:text-primary transition-colors duration-200"
        >
          <Github size={20} className="hover:text-gray-600" />
        </a>
        <a
          href="https://www.linkedin.com/in/melekelmokhtar/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray hover:text-primary transition-colors duration-200"
        >
          <Linkedin size={20} className="hover:text-blue-300" />
        </a>
        <a
          href="mailto:melek.elmokhtar@gmail.com"
          aria-label="Email"
          className="text-gray hover:text-primary transition-colors duration-200"
        >
          <Mail size={20} className="hover:text-red-300" />
        </a>
      </div>
    </div>
  );
};

export default HangingSocials;
