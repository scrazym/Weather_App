import { Header } from "components/header/Header";
import MainIfoWeather from "components/mainIfoWeather/MainIfoWeather";
import SideMenu from "components/sideMenu/SideMenu";

export const MainPage = () => {
  return (
    <>
      <Header />
      <SideMenu />
      <MainIfoWeather />
      <div className="wrapper wrapper__card"></div>
    </>
  );
};
