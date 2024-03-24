const Header = ({ children }: { children: string }) => {
  return (
    <h2 className="mt-6 mb-2 capitalize text-3xl tracking-wider text-inherit font-abhaya">
      {children}
    </h2>
  );
};

export default Header;
