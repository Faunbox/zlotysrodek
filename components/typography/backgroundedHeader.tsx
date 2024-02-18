const BackgroundedHeader = ({
  children,
  size = "text-4xl",
  position = "text-left",
}: {
  children: string;
  size?: string;
  position?: string;
}) => {
  return (
    <header className="w-full bg-green pb-6 pt-6 ">
      <h3
        className={`${size} ${position} text-white font-abhaya mx-10 lg:mx-20 tracking-wide	`}
      >
        {children}
      </h3>
    </header>
  );
};

export default BackgroundedHeader;
