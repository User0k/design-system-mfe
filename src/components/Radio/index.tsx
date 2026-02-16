import type { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export type RadioProps = {
  /** Color of the radio */
  color?: "primary" | "success" | "error";
  /** Size of the radio button */
  radioSize?: "large" | "small";
  /** Shape of the dot or an icon inside the radio */
  shape?: "filled" | "pitted";
};

export function Radio({
  color = "primary",
  radioSize = "small",
  shape = "filled",
  className,
  ...props
}: RadioProps & InputHTMLAttributes<HTMLInputElement>) {
  const baseClasses = [
    "rounded-full",
    "border-2",
    "relative",
    "appearance-none",
    "cursor-pointer",
    "border-gray-300",
    "focus:ring-transparent",
    "focus:border-none",
    "checked:after:content-['']",
    "checked:after:absolute",
    "checked:after:left-1/2",
    "checked:after:top-1/2",
    "checked:after:-translate-y-1/2",
    "checked:after:-translate-x-1/2",
    "checked:after:rounded-full",
    // Focus styles (ring offset is common, color comes from colorClasses)
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-offset-2",
    // Disabled styles
    "disabled:opacity-60",
    "disabled:cursor-not-allowed",
    "disabled:border-gray-300",
    "disabled:checked:after:bg-gray-300",
  ];

  const colorClasses = {
    primary:
      "checked:border-indigo-600 checked:after:bg-indigo-600 checked:hover:border-indigo-700 checked:hover:after:bg-indigo-700 hover:border-indigo-300",
    success:
      "checked:border-green-700 checked:after:bg-green-700 checked:hover:border-green-800 checked:hover:after:bg-green-800 hover:border-green-400",
    error:
      "checked:border-red-600 checked:after:bg-red-600 checked:hover:border-red-700 checked:hover:after:bg-red-700 hover:border-red-300",
  }[color];

  const sizeClasses = radioSize === "large" ? "w-5 h-5" : "w-4 h-4";

  const dotSizeClasses =
    shape === "filled"
      ? "checked:after:w-3/4 checked:after:h-3/4"
      : "checked:after:w-1/2 checked:after:h-1/2";

  return (
    <input
      type="radio"
      {...props}
      className={twMerge(
        ...baseClasses,
        colorClasses,
        sizeClasses,
        dotSizeClasses,
        className,
      )}
    />
  );
}
