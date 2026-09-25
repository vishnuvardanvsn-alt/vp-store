import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
  children: ReactNode;
}

const base =
  "inline-flex items-center justify-center rounded-full font-medium transition-transform duration-200 ease-out will-change-transform hover:scale-[1.03] active:scale-[0.98] disabled:opacity-40 disabled:pointer-events-none disabled:hover:scale-100";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-black text-white",
  outline: "border border-black/70 text-black bg-transparent",
  ghost: "text-black bg-transparent underline underline-offset-4 decoration-black/30 hover:decoration-black",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "px-6 py-2.5 text-sm",
  lg: "px-12 sm:px-14 py-4 sm:py-5 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
