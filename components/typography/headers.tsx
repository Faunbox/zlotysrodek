const Header = ({ children }: { children: string }) => {
  return (
    <h2 className="my-6 capitalize text-2xl tracking-wider text-inherit">
      {children}
    </h2>
  );
};

export default Header;
