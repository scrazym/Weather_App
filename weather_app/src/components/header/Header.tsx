import Container from "react-bootstrap/Container";
import Switcher from "ui/switcher/Switcher";

import "../../ui/button/btn.css";

import Btn from "../../ui/button/Btn";

import Hamburger from "./hamburger/Hamburger";
import Logo from "./logo/logo";
import { Nav } from "./nav/Navigation";

import "./header.scss";

export const Header = () => {
  return (
    <header className="header">
      <Container className="header__container">
        <Logo />
        <Nav />
        <Btn path="/login" className="btn link__sideMenu" text="Log In" />
        <Switcher />
        <Hamburger />
      </Container>
    </header>
  );
};
