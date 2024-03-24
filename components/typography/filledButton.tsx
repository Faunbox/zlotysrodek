"use client";
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
  py = 4,
  border = false,
  ariaLabel = "button",
}: {
  children: string | React.JSX.Element;
  color?: string;
  text?: string;
  bold?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement> | any;
  disabled?: boolean;
  px?: number;
  py?: number;
  border?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
}) => {
  const { pending } = useFormStatus();

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${color} text-${text} py-[6px] px-${px} flex flex-row items-center justify-center font-montserrat uppercase ${
        bold &&
        "rounded-sm shadow-lg disabled:bg-lightGreen hover:scale-105 duration-200 transform"
      } ${border && "border-white border-1"}`}
    >
      {pending ? "Wysyłanie..." : children}
    </button>
  );
};

export default FilledButton;
