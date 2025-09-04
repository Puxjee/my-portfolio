"use client";
import { ExternalLink, Link, Square, SquareIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Button from "../shared/Button/Button";
import Quote from "./Quote/Quote";
import HangingSocials from "./HangingSocials/HangingSocials";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Scalable", "Modern", "User-friendly"],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <div className="flex flex-col gap-8 px-38 m-16">
      <div className="gap-24 items-center flex justify-center">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white leading-tight mb-6 w-115">
            Hi, I'm <span className="text-primary italic">Melek ElMokhtar</span>
            , a <span className="text-primary">Fullstack Web Developer</span>
          </h1>
          <p className="text-lg text-gray w-130">
            I craft{" "}
            <span className="text-primary">
              {text}
              <Cursor cursorBlinking={false} />
            </span>{" "}
            web applications.
          </p>
          <Button
            text="Contact me!!"
            className="border-[#C778DD] hover:bg-[#C778DD]/[0.08] transition-all duration-300 ease-in-out"
            onClick={() => {
              window.location.href = "mailto:melek.elmokhtar@gmail.com";
            }}
          />
        </div>
        <div className="flex flex-col items-center flex-1">
          <Image
            src="/ProfilePic.png"
            alt="Hero Image"
            width={300}
            height={300}
          />
          <p className="border-1 p-3 text-gray text-sm flex items-center">
            <SquareIcon fill="#77a2d1" className="inline-block mr-2" />
            Currently working <span className="text-blue-300 mx-2">@</span>{" "}
            <a
              href="http://imex.com.tn/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group cursor-pointer"
            >
              <span className="relative">
                IMEX Tunisia
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </span>
              <ExternalLink
                className="inline-block ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform group-hover:translate-x-1"
                size={18}
              />
            </a>
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Quote
          color="#C778DD"
          quote="With great power comes great electricity bill"
          author="Dr. Who"
        />
      </div>
      <HangingSocials />
    </div>
  );
};

export default Hero;
