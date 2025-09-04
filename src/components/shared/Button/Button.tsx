import React from "react";
import { cn } from "@/lib/utils";

const Button = ({
  text,
  className,
  onClick,
  hasIcon = false,
  icon,
}: {
  text: string;
  className?: string;
  onClick?: () => void;
  hasIcon?: boolean;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "my-4 border-1 bg-transparent py-2 px-4 text-white flex items-center justify-between cursor-pointer ",
        className
      )}
      onClick={onClick}
    >
      {text}
      {hasIcon && <span className="ml-2">{icon}</span>}
    </div>
  );
};

export default Button;
