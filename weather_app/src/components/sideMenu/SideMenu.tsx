import { LogoLink } from "ui/link/title";

import "./sideMenu.scss";
const SideMenu = () => {
  return (
    <div className="side-menu">
      <ul className="side-menu__list">
        <li className="side-menu__item">
          <LogoLink
            className="link link__sideMenu"
            path="/"
            text="Link for 1"
          />
        </li>
        <li className="side-menu__item">
          <LogoLink
            className="link link__sideMenu"
            path="/"
            text="Link for 2"
          />
        </li>
        <li className="side-menu__item">
          <LogoLink
            className="link link__sideMenu"
            path="/"
            text="Link for 3"
          />
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
