import logo from "../../../assets/moto.jpg";

import { LogoText } from "./title";

const Logo = () => {
  return (
    <div className="header__logo">
      <div className="header__logo-img">
        <img src={logo} alt="logo" />
      </div>
      <LogoText />
    </div>
  );
};

export default Logo;
