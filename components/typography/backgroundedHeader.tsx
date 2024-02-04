const BackgroundedHeader = ({ children }: { children: string }) => {
  return (
    <header className="w-full bg-green pb-6 pt-16 ">
      <h3 className="text-4xl text-white font-abhaya mx-60 leading-relaxed">
        {children}
      </h3>
    </header>
  );
};

export default BackgroundedHeader;
