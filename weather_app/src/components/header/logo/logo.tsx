import logo from "../../../assets/moto.jpg";

import { LogoLink } from "./title";

const Logo = () => {
  return (
    <div className="header__logo">
      <div className="header__logo-img">
        <img src={logo} alt="logo" />
      </div>
      <LogoLink text="LOGO" className="header__logo" path={"/dew"} />
    </div>
  );
};

export default Logo;
