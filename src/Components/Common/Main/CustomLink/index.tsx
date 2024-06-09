import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

interface CustomLinkProps extends PropsWithChildren {
  to: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ to, children, ...rest }) => {
  return (
    <Link className="text-primary-900 sm:text-p1 lg:text-p2" to={to} {...rest}>
      {children}
    </Link>
  );
};

export default CustomLink;
