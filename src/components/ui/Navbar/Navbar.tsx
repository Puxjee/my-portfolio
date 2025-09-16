"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n";

const Navbar = () => {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState("");
  const { t, locale, setLocale } = useI18n();

  const setActiveFromLocation = useCallback(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.replace("#", "");
      switch (hash) {
        case "home":
        case "/":
          setActiveItem("home");
          return;
        case "sep-projects":
        case "projects":
          setActiveItem("works");
          return;
        case "sep-skills":
        case "skills":
          setActiveItem("skills");
          return;
        case "sep-about":
        case "about":
          setActiveItem("about-me");
          return;
        case "sep-contacts":
        case "contacts":
          setActiveItem("contacts");
          return;
        default:
          break;
      }
    }

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
  }, [pathname]);

  useEffect(() => {
    setActiveFromLocation();
    if (typeof window !== "undefined") {
      const onHashChange = () => setActiveFromLocation();
      window.addEventListener("hashchange", onHashChange);
      return () => window.removeEventListener("hashchange", onHashChange);
    }
  }, [setActiveFromLocation]);

  const scrollToIdWithOffset = (id: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (typeof window === "undefined") return;
    const el = document.getElementById(id);
    if (!el) {
      window.location.href = `/#${id}`;
      return;
    }

    window.history.replaceState(null, "", `#${id}`);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      id="site-navbar"
      className="border-b-[#C778DD] border-b-2 w-full top-0 sticky h-16 bg-black/20 backdrop-blur-md flex items-center justify-between py-4 px-6 md:px-12 lg:px-24 overflow-x-hidden z-50"
    >
      <div className="text-white/80 font-bold text-xl cursor-pointer hover:text-[#C778DD] transition-colors duration-150">
        {String(t("nav.brand", "Meleek"))}
      </div>
      <div>
        <ul className="flex gap-8 text-md">
          <li>
            <Link
              href="/"
              onClick={(e) => {
                if (
                  typeof window !== "undefined" &&
                  window.location.pathname === "/"
                ) {
                  e.preventDefault();
                  setActiveItem("home");
                  window.history.replaceState(null, "", "/");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className={`group relative pb-1 ${
                activeItem === "home" ? "after:w-full" : ""
              } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#C778DD] after:transition-all after:duration-300 after:ease-out hover:after:w-full ${
                activeItem !== "home" ? "after:w-0" : ""
              }`}
            >
              <span className="text-primary">#</span>
              <span className="text-gray ">
                {String(t("nav.home", "home"))}
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/#sep-projects"
              onClick={(e) => {
                setActiveItem("works");
                scrollToIdWithOffset("sep-projects", e);
              }}
              className={`group relative pb-1 ${
                activeItem === "works" ? "after:w-full" : ""
              } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#C778DD] after:transition-all after:duration-300 after:ease-out hover:after:w-full ${
                activeItem !== "works" ? "after:w-0" : ""
              }`}
            >
              <span className="text-primary">#</span>
              <span className="text-gray group-hover:text-white transition-colors duration-300">
                {String(t("nav.works", "works"))}
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/#sep-about"
              onClick={(e) => {
                setActiveItem("about-me");
                scrollToIdWithOffset("sep-about", e);
              }}
              className={`group relative pb-1 ${
                activeItem === "about-me" ? "after:w-full" : ""
              } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#C778DD] after:transition-all after:duration-300 after:ease-out hover:after:w-full ${
                activeItem !== "about-me" ? "after:w-0" : ""
              }`}
            >
              <span className="text-primary">#</span>
              <span className="text-gray group-hover:text-white transition-colors duration-300">
                {String(t("nav.about", "about-me"))}
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/#sep-contacts"
              onClick={(e) => {
                setActiveItem("contacts");
                scrollToIdWithOffset("sep-contacts", e);
              }}
              className={`group relative pb-1 ${
                activeItem === "contacts" ? "after:w-full" : ""
              } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#C778DD] after:transition-all after:duration-300 after:ease-out hover:after:w-full ${
                activeItem !== "contacts" ? "after:w-0" : ""
              }`}
            >
              <span className="text-primary">#</span>
              <span className="text-gray group-hover:text-white transition-colors duration-300">
                {String(t("nav.contacts", "contacts"))}
              </span>
            </Link>
          </li>
          <li className="flex items-center">
            <Select
              value={locale}
              onValueChange={(v: string) => setLocale(v as Locale)}
            >
              <SelectTrigger
                size="navbar"
                className="bg-transparent text-gray cursor-pointer"
              >
                <SelectValue
                  placeholder={String(
                    t("nav.selectPlaceholder", locale.toUpperCase())
                  )}
                />
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
