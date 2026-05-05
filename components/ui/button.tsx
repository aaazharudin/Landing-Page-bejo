"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
}

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg transition-all duration-200";

  const variants = {
    primary: "bg-white text-black hover:bg-gray-200",
    secondary: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
