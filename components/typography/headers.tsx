const Header = ({ children }: { children: string }) => {
  return (
    <h2 className="my-12 underline uppercase text-xl text-green">{children}</h2>
  );
};

export default Header;
