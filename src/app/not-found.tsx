"use client";
import Link from "next/link";
import React, { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    const navbar = document.getElementById("site-navbar");
    const footer = document.querySelector("footer");
    const prevNavDisplay = navbar ? navbar.style.display : "";
    const prevFootDisplay = footer ? (footer as HTMLElement).style.display : "";
    if (navbar) navbar.style.display = "none";
    if (footer) (footer as HTMLElement).style.display = "none";

    return () => {
      if (navbar) navbar.style.display = prevNavDisplay;
      if (footer) (footer as HTMLElement).style.display = prevFootDisplay;
    };
  }, []);

  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <div className="text-6xl font-bold text-white/90 mb-4">404</div>
        <div className="text-xl text-[var(--color-gray)] mb-6">
          Oops — the page you&apos;re looking for can&apos;t be found.
        </div>

        <div className="bg-black/40 border border-[#C778DD] rounded-md p-6 inline-block">
          <p className="text-[var(--color-gray)] mb-4">
            It may have been removed, had its name changed, or is temporarily
            unavailable.
          </p>

          <div className="flex gap-4 justify-center">
            <Link
              href="/"
              className="px-4 py-2 border border-[#C778DD] text-white/90 hover:text-white transition-colors"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
