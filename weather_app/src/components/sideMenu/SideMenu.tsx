import "./sideMenu.scss";
const SideMenu = () => {
  return (
    <div className="side-menu">
      <ul className="side-menu__list">
        <li className="side-menu__item">
          <a href="" className="side-menu__link">
            Link 1
          </a>
        </li>
        <li className="side-menu__item">
          <a href="" className="side-menu__link">
            Link 2
          </a>
        </li>
        <li className="side-menu__item">
          <a href="" className="side-menu__link">
            Link 3
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
