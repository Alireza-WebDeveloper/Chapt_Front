import React from "react";

interface FooterProps {
  children?: React.ReactNode;
}
const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <div className="fixed bottom-0 bg-primary-200 w-full p-3 text-center xl:text-p4  sm:text-p3">
      {children}
    </div>
  );
};

export default Footer;
