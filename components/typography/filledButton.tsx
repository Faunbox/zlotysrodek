"use client";
import { CircularProgress } from "@nextui-org/react";
import { ButtonHTMLAttributes } from "react";
import { useFormStatus } from "react-dom";

const FilledButton = ({
  children,
  color = "bg-gold",
  text = "darkGreen",
  bold = true,
  type = "button",
  disabled = false,
  onClick,
  px = 5,
  py = 3,
}: {
  children: string | React.JSX.Element;
  color?: string;
  text?: string;
  bold?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement> | any;
  disabled?: boolean;
  px?: number;
  py?: number;
  onClick?: () => void;
}) => {
  const { pending } = useFormStatus();

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${color} text-${text} py-1 px-${px} flex flex-row items-center justify-center uppercase ${
        bold &&
        "rounded-sm shadow-lg disabled:bg-lightGreen hover:scale-105 duration-200 transform"
      }`}
    >
      {pending ? "Wysyłanie..." : children}
    </button>
  );
};

export default FilledButton;
