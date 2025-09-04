import React from "react";
import { cn } from "@/lib/utils";

const Button = ({
  text,
  className,
  onClick,
}: {
  text: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      className={cn(
        "my-4 border-1 bg-transparent py-2 px-4 text-white inline-block cursor-pointer ",
        className
      )}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Button;
