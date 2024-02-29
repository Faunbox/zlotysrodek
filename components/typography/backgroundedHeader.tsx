const BackgroundedHeader = ({
  children,
  size = "text-5xl xl:text-6xl",
  position = "text-left",
  title = true,
}: {
  children: string;
  size?: string;
  position?: string;
  title?: boolean;
}) => {
  return (
    <header className={`w-screen bg-green py-6 ${title && "pt-5 xl:pt-20"}`}>
      <div className="container xl:pl-10">
        <h3
          className={`${size} ${position} text-white font-abhaya mx-8 md:mx-10 lg:mx-20 tracking-wide	`}
        >
          {children}
        </h3>
      </div>
    </header>
  );
};

export default BackgroundedHeader;
