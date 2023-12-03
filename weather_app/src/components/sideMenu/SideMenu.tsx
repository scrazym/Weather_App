import { Link } from "ui/link/title";

import "./sideMenu.scss";
const SideMenu = () => {
  return (
    <div className="side-menu">
      <ul className="side-menu__list">
        <li className="side-menu__item">
          <Link className="link link__sideMenu" path="/" text="Weather today" />
        </li>
        <li className="side-menu__item">
          <Link
            className="link link__sideMenu"
            path="/week"
            text="3 days forecast"
          />
        </li>

        <li className="side-menu__item">
          <Link className="link link__sideMenu" path="/" text="Link for 3" />
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
