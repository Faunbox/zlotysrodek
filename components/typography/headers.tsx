const Header = ({ children, gold }: { children: string; gold?: boolean }) => {
  return (
    <h2
      className={`mt-6 mb-2 capitalize text-3xl tracking-wider text-inherit font-abhaya text-center ${
        gold && "text-gold"
      }`}
    >
      {children}
    </h2>
  );
};

export default Header;
