import Link from "next/link";
import React from "react";

const Separator = ({
  text,
  href,
  textColor,
  separatorColor,
  viewAllColor,
  showViewAll = true,
}: {
  text: string;
  href: string;
  textColor: string;
  separatorColor: string;
  viewAllColor: string;
  showViewAll?: boolean;
}) => {
  return (
    <div className="flex items-center my-8 py-2 w-full max-w-6xl">
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
          {text}
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
            View All {"~~>"}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Separator;
