import { ButtonHTMLAttributes } from "react";
import { StyledJsxStyleRegistry } from "styled-jsx";

const FilledButton = ({
  children,
  color = "bg-gold",
  text = "darkGreen",
  bold = true,
  type = "button",
  disabled = false,
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
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${color} text-${text}  py-${py} px-${px} uppercase ${
        bold && "font-semibold rounded-md shadow-md disabled:bg-lightGreen"
      }`}
    >
      {children}
    </button>
  );
};

export default FilledButton;
