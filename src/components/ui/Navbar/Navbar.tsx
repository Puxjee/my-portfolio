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

  const setActiveFromLocation = () => {
    // If there's a hash (e.g. #about), prefer that
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

    // fallback to pathname
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
    setActiveFromLocation();

    if (typeof window !== "undefined") {
      const onHashChange = () => setActiveFromLocation();
      window.addEventListener("hashchange", onHashChange);
      return () => window.removeEventListener("hashchange", onHashChange);
    }
  }, [pathname]);

  // Observe separators so manual scroll updates the active nav item
  useEffect(() => {
    if (typeof window === "undefined") return;
    const ids = ["sep-projects", "sep-skills", "sep-about", "sep-contacts"];
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry closest to the top that's intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          const id = visible[0].target.id;
          switch (id) {
            case "sep-projects":
              setActiveItem("works");
              break;
            case "sep-skills":
              setActiveItem("skills");
              break;
            case "sep-about":
              setActiveItem("about-me");
              break;
            case "sep-contacts":
              setActiveItem("contacts");
              break;
            default:
              break;
          }
        }
        else {
          // no separator currently in the observed viewport area
          // if we're on the home page and near the top, mark Home active
          if (typeof window !== "undefined" && window.location.pathname === "/") {
            const nearTop = (window.pageYOffset || document.documentElement.scrollTop) < 120;
            if (nearTop) setActiveItem("home");
          }
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Fallback: when user scrolls near top, ensure Home becomes active
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      if (pathname === "/" && scrollY < 120) {
        setActiveItem("home");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const scrollToIdWithOffset = (id: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (typeof window === "undefined") return;
    const el = document.getElementById(id);
    if (!el) {
      // if target not on this page, navigate to root with hash
      window.location.href = `/#${id}`;
      return;
    }

    // Use scrollIntoView so CSS `scroll-margin-top` takes effect
    // (we set scroll-margin-top in globals.css to reserve space for the separator)
    window.history.replaceState(null, "", `#${id}`);
    el.scrollIntoView({ behavior: "smooth", block: "start" });

    // If you still want a dynamic -5% offset instead of CSS margin, uncomment below:
    // const rect = el.getBoundingClientRect();
    // const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // const targetY = rect.top + scrollTop;
    // const offset = Math.round(window.innerHeight * 0.05);
    // const finalY = Math.max(targetY - offset, 0);
    // window.history.replaceState(null, '', `#${id}`);
    // window.scrollTo({ top: finalY, behavior: 'smooth' });
  };
  return (
    <div className="border-b-[#C778DD] border-b-2 w-full top-0 sticky h-16 bg-black/20 backdrop-blur-md flex items-center justify-between py-4 px-6 md:px-12 lg:px-24 overflow-x-hidden z-50">
      <div className="text-white/80 font-bold text-xl cursor-pointer hover:text-[#C778DD] transition-colors duration-150">
        Meleek
      </div>
      <div>
        <ul className="flex gap-8 text-md">
          <li>
            <a
              href="/"
              onClick={(e) => {
                // If already on the home page, prevent full navigation and scroll to top
                if (typeof window !== "undefined" && window.location.pathname === "/") {
                  e.preventDefault();
                  setActiveItem("home");
                  // remove any hash and update URL to root
                  window.history.replaceState(null, "", "/");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
                // otherwise allow the link to navigate to '/'
              }}
              className={`group relative pb-1 ${
                activeItem === "home" ? "after:w-full" : ""
              } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#C778DD] after:transition-all after:duration-300 after:ease-out hover:after:w-full ${
                activeItem !== "home" ? "after:w-0" : ""
              }`}
            >
              <span className="text-primary">#</span>
              <span className="text-gray ">home</span>
            </a>
          </li>
          <li>
            <a
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
                works
              </span>
            </a>
          </li>
          <li>
            <a
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
                about-me
              </span>
            </a>
          </li>
          <li>
            <a
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
                contacts
              </span>
            </a>
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
