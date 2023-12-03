import { Link } from "ui/link/title";

import "./navigation.scss";

const NavMenu = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link className="link" path="/" text="Weather Today" />
        </li>
        <li className="nav__item">
          <Link className="link" path="/week" text="3 days forecast" />
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
