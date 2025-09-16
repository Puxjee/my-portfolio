"use client";
import Link from "next/link";
import React from "react";
import { useI18n } from "@/lib/i18n";

const Separator = ({
  id,
  text,
  textKey,
  href,
  textColor,
  separatorColor,
  viewAllColor,
  showViewAll = true,
}: {
  id?: string;
  text?: string;
  textKey?: string;
  href: string;
  textColor: string;
  separatorColor: string;
  viewAllColor: string;
  showViewAll?: boolean;
}) => {
  const { t } = useI18n();
  const label = String(textKey ? t(textKey, text ?? "") : text ?? "");
  return (
    <div id={id} className="flex items-center my-4 py-2 w-full max-w-6xl">
      <div className="flex items-center flex-shrink-0">
        <span
          className="text-2xl font-semibold"
          style={{ color: separatorColor }}
        >
          #
        </span>{" "}
        <span
          className="pr-2 text-2xl font-semibold"
          style={{ color: textColor }}
        >
          {label}
        </span>
        <hr
          className="border-t-2 w-xl"
          style={{ borderColor: separatorColor }}
        />{" "}
      </div>
      <div className="flex-grow"></div>
      <div className="flex-shrink-0">
        <Link href={href} className="group">
          <span
            className={`text-md font-medium transition-colors duration-300 text-[var(--view-color)] group-hover:text-[var(--sep-color)] ${
              showViewAll ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            style={
              {
                "--sep-color": separatorColor,
                "--view-color": viewAllColor,
              } as React.CSSProperties
            }
          >
            {String(t("nav.viewAll", "View All ~~>"))}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Separator;
