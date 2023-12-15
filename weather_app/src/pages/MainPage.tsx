import { Header } from "components/header/Header";
import { Responsive } from "components/mainPageWeather/cardSlider/Slider";
import MainIfoWeather from "components/mainPageWeather/MainIfoWeather";
import SideMenu from "components/sideMenu/SideMenu";

export const MainPage = () => {
  return (
    <>
      <Header />
      <SideMenu />
      <MainIfoWeather />
      <Responsive />

      {/* <Slider /> */}
    </>
  );
};
