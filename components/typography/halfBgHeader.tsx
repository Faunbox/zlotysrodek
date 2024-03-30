const HalfBackgroundHeader = ({
  children,
  translate = 0,
}: {
  children: string;
  translate?: number;
}) => {
  return (
    <div
      className={`w-screen -translate-x-[${translate}%] md:-translate-x-[25%] lg:-translate-x-[40%] xl:-translate-x-[50%] bg-green items-center justify-center text-right py-6 rounded-r-small`}
    >
      <h3 className="text-white font-abhaya pl-10 md:pr-10 tracking-wide text-3xl text-left md:text-center">
        {children}
      </h3>
    </div>
  );
};

export default HalfBackgroundHeader;
