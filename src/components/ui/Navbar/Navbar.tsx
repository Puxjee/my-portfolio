"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState("");
  const handleActiveItem = () => {
    switch (pathname) {
      case "/":
        setActiveItem("home");
        break;
      case "/projects":
        setActiveItem("works");
        break;
      case "/about":
        setActiveItem("about-me");
        break;
      case "/contact":
        setActiveItem("contacts");
        break;
      default:
        setActiveItem("");
        break;
    }
  };

  useEffect(() => {
    handleActiveItem();
  }, [pathname]);
  return (
    <div className="border-b-[#C778DD] border-b-2 w-full top-0 sticky h-16 bg-black/20 backdrop-blur-md flex items-center justify-between py-4 px-6 md:px-12 lg:px-24 overflow-x-hidden z-50">
      <div className="text-white/80 font-bold text-xl cursor-pointer hover:text-[#C778DD] transition-colors duration-150">
        Meleek
      </div>
      <div>
        <ul className="flex gap-8 text-md">
          <li>
            <Link
              href="/"
              className={`group relative pb-1 ${
                activeItem === "home" ? "after:w-full" : ""
              } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#C778DD] after:transition-all after:duration-300 after:ease-out hover:after:w-full ${
                activeItem !== "home" ? "after:w-0" : ""
              }`}
            >
              <span className="text-primary">#</span>
              <span className="text-gray ">home</span>
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`group relative pb-1 ${
                activeItem === "works" ? "after:w-full" : ""
              } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#C778DD] after:transition-all after:duration-300 after:ease-out hover:after:w-full ${
                activeItem !== "works" ? "after:w-0" : ""
              }`}
            >
              <span className="text-primary">#</span>
              <span className="text-gray group-hover:text-white transition-colors duration-300">
                works
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`group relative pb-1 ${
                activeItem === "about-me" ? "after:w-full" : ""
              } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#C778DD] after:transition-all after:duration-300 after:ease-out hover:after:w-full ${
                activeItem !== "about-me" ? "after:w-0" : ""
              }`}
            >
              <span className="text-primary">#</span>
              <span className="text-gray group-hover:text-white transition-colors duration-300">
                about-me
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`group relative pb-1 ${
                activeItem === "contacts" ? "after:w-full" : ""
              } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#C778DD] after:transition-all after:duration-300 after:ease-out hover:after:w-full ${
                activeItem !== "contacts" ? "after:w-0" : ""
              }`}
            >
              <span className="text-primary">#</span>
              <span className="text-gray group-hover:text-white transition-colors duration-300">
                contacts
              </span>
            </Link>
          </li>
          <li className="flex items-center">
            <Select>
              <SelectTrigger
                size="navbar"
                className="bg-transparent text-gray cursor-pointer"
              >
                <SelectValue placeholder="EN" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900/95 border border-gray-700 text-gray backdrop-blur-sm shadow-lg min-w-[4rem] w-16">
                <SelectItem
                  value="en"
                  className="cursor-pointer hover:bg-gray-800 focus:bg-gray-800 text-gray hover:text-primary focus:text-primary"
                >
                  <span className="text-primary">#</span>
                  <span>EN</span>
                </SelectItem>
                <SelectItem
                  value="fr"
                  className="cursor-pointer hover:bg-gray-800 focus:bg-gray-800 text-gray hover:text-primary focus:text-primary"
                >
                  <span className="text-primary">#</span>
                  <span>FR</span>
                </SelectItem>
              </SelectContent>
            </Select>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
