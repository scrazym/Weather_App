import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";

import { Header } from "components/header/Header";
import SideMenu from "components/sideMenu/SideMenu";
import { fetchThreeDaysWeather } from "components/weekPageWeather/getWeekWeather/getThreeDaysForecast";

const ThreeDaysForecastPage = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.weather);
  const location = state.currentWeather.location;

  useEffect(() => {
    dispatch(fetchThreeDaysWeather(location));
  }, [location]);
  return (
    <>
      <Header />
      <SideMenu />
      <section className="threeday"></section>
    </>
  );
};
export default ThreeDaysForecastPage;
