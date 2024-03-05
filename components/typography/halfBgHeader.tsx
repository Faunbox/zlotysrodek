const HalfBackgroundHeader = ({ children }: { children: string }) => {
  return (
    <div className="w-screen -translate-x-[15%] md:-translate-x-[25%] lg:-translate-x-[50%] bg-green items-center justify-center text-right py-6 rounded-r-small">
      <h3 className="text-white font-abhaya pr-10 tracking-wide text-3xl">
        {children}
      </h3>
    </div>
  );
};

export default HalfBackgroundHeader;
