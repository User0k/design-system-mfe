import type { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button appearance */
  variant?: "contained" | "outlined" | "text";
  /** The main color of the button */
  color?: "primary" | "neutral" | "info" | "success" | "error";
  /** Size of the button */
  size?: "sm" | "md" | "lg";
  /** Arbitrary displayed icon */
  icon?: ReactNode;
  /** Button contents */
  children?: ReactNode;
}

export function Button({
  variant = "contained",
  color = "primary",
  size = "md",
  disabled,
  icon,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "flex gap-1 align-center rounded-md min-w-6 font-semibold";

  const sizeClasses = {
    lg: "sm:py-4 py-2 sm:px-8 px-4 sm:text-xl text-base",
    md: "py-2 sm:px-4 px-2 sm:text-base text-sm",
    sm: "py-1 px-2 sm:text-sm text-xs",
  };

  const colorClasses = {
    primary: {
      contained: "text-white bg-indigo-700 hover:bg-indigo-800",
      outlined: "border-1 border-indigo-700 text-indigo-700 hover:bg-indigo-50",
      text: "text-indigo-700 hover:bg-indigo-50",
    },
    neutral: {
      contained: "text-white bg-gray-800 hover:bg-gray-950",
      outlined: "border-1 border-gray-200 text-gray-800 hover:bg-gray-100",
      text: "text-gray-500 hover:bg-gray-100",
    },
    error: {
      contained: "text-white bg-red-600 hover:bg-red-700",
      outlined: "border-1 border-red-600 text-red-600 hover:bg-red-50",
      text: "text-red-600 hover:bg-red-50",
    },
    info: {
      contained: "text-white bg-blue-600 hover:bg-blue-800",
      outlined: "border-1 border-blue-700 text-blue-700 hover:bg-blue-50",
      text: "text-blue-700 hover:bg-blue-50",
    },
    success: {
      contained: "text-white bg-green-700 hover:bg-green-800",
      outlined: "border-1 border-green-700 text-green-700 hover:bg-green-50",
      text: "text-green-700 hover:bg-green-50",
    },
  };

  const disabledClass = disabled
    ? "opacity-40 pointer-events-none"
    : "cursor-pointer";

  const iconWrapperClasses = "inline-flex items-center mr-2";

  const iconColorClass =
    variant === "contained" ? "[&>*]:fill-white" : "[&>*]:fill-current";

  return (
    <button
      className={twMerge(
        baseClasses,
        sizeClasses[size],
        colorClasses[color][variant],
        disabledClass,
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {icon && (
        <span className={twMerge(iconWrapperClasses, iconColorClass)}>
          {icon}
        </span>
      )}
      {children}
    </button>
  );
}
