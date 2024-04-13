const HalfBackgroundHeader = ({
  children,
  translate = 0,
}: {
  children: string;
  translate?: number;
}) => {
  return (
    <div
      className={`w-screen bg-green items-center justify-center py-6 md:px-20 `}
    >
      <h3 className="text-white font-tinos underline pl-10 md:pr-10 tracking-wide text-3xl container">
        {children}
      </h3>
    </div>
  );
};

export default HalfBackgroundHeader;
