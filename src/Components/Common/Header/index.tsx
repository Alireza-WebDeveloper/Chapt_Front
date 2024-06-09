interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className="flex p-4 bg-primary-200 items-center justify-around w-full flex-wrap">
      {children}
    </div>
  );
};

export default Header;
