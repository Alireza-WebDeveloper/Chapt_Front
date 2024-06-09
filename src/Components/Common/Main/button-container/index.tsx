"use client";

// !! Package
import React, { ButtonHTMLAttributes } from "react";

// !! Define the interface for the component props
interface ButtonContainerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: "blue" | "red" | "green";
  fontSize?: "small" | "large";
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({
  children,
  color = "blue",
  fontSize = "small",
  disabled,
  ...rest
}) => {
  // !! Define CSS classes as an object
  const classes = {
    base: "px-4 py-2 rounded",
    colors: {
      blue: "bg-blue-500 hover:bg-blue-700",
      red: "bg-red-500 hover:bg-red-700",
      green: "bg-green-500 hover:bg-red-700",
    },
    fontSizes: {
      small: "text-sm",
      large: "text-lg",
    },
    disabled: "opacity-50 cursor-not-allowed",
  };

  // Select color classes based on the color prop
  const colorClasses =
    color === "blue"
      ? classes.colors.blue
      : color === "green"
      ? classes.colors.green
      : classes.colors.red;

  // Select font size classes based on the fontSize prop
  const fontSizeClasses =
    fontSize === "small" ? classes.fontSizes.small : classes.fontSizes.large;

  // Select disabled classes based on the disabled prop
  const disabledClasses = disabled ? classes.disabled : "";

  return (
    <button
      {...rest}
      className={`${classes.base} ${colorClasses} ${fontSizeClasses} ${disabledClasses}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonContainer;
