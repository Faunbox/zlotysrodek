const FilledButton = ({
  children,
  color = "gold",
  text = "darkGreen",
  bold = true,
}: {
  children: string;
  color?: string;
  text?: string;
  bold?: boolean;
}) => {
  return (
    <button
      className={`bg-${color} text-${text} border-1 border-black mx-auto py-3 px-5 uppercase ${
        bold && "font-semibold"
      }`}
    >
      {children}
    </button>
  );
};

export default FilledButton;
