import Link from "next/link";
import React from "react";

const Separator = ({
  text,
  href,
  textColor,
  separatorColor,
  viewAllColor,
}: {
  text: string;
  href: string;
  textColor: string;
  separatorColor: string;
  viewAllColor: string;
}) => {
  return (
    <div className="flex items-center my-8 px-46 py-2 justify-between gap-50">
      <div className="flex items-center">
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
      <div>
        <Link href={href} className="group">
          <span
            className="text-md font-medium transition-colors duration-300 text-[var(--view-color)] group-hover:text-[var(--sep-color)]"
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
