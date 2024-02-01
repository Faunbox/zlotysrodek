import { ButtonHTMLAttributes } from "react";

const FilledButton = ({
  children,
  color = "gold",
  text = "darkGreen",
  bold = true,
  type = "button",
  disabled= false,
  px = 5,
  py = 3
}: {
  children: string;
  color?: string;
  text?: string;
  bold?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement> | any,
  disabled?: boolean,
  px?: number,
  py?: number
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`bg-${color}  text-${text}  mx-auto py-${py} px-${px} uppercase ${
        bold && "font-semibold"
      }`}
    >
      {children}
    </button>
  );
};

export default FilledButton;
