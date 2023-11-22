import { NavLink } from "react-router-dom";

import "./link.scss";
interface ILogo {
  path: string;
  text: string;
  className: string;
}

export const LogoLink = ({ path, text, className }: ILogo) => {
  return (
    <NavLink to={path} className={className}>
      {text}
    </NavLink>
  );
};