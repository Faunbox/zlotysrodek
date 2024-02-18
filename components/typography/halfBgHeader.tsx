const HalfBackgroundHeader = ({ children }: { children: string }) => {
  return (
    <div className="w-10/12 lg:w-6/12 bg-green items-center justify-center text-center pb-6 pt-6 rounded-r-small">
      <h3 className="text-white font-abhaya lg:ml-60 tracking-wide text-3xl">
        {children}
      </h3>
    </div>
  );
};

export default HalfBackgroundHeader;
