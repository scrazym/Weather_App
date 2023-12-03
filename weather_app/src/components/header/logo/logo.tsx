import logo from "../../../assets/moto.jpg";
import { Link } from "../../../ui/link/title";

const Logo = () => {
  return (
    <div className="header__logo">
      <div className="header__logo-img">
        <img src={logo} alt="logo" />
      </div>
      <Link text="LOGO" className="link link__title " path={"/*"} />
    </div>
  );
};

export default Logo;
