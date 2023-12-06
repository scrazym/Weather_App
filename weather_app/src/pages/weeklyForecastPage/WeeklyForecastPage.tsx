import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";

import { Header } from "components/header/Header";
import SideMenu from "components/sideMenu/SideMenu";
import { fetchWeekWeather } from "components/weekPageWeather/getWeekWeather/getWeeklyForecast";

const WeeklyForecastPage = () => {
  const dispatch = useAppDispatch();
  const location = "Moscow";
  const state = useAppSelector((state) => state.weatherWeek);
  console.log(state);
  useEffect(() => {
    dispatch(fetchWeekWeather(location));
  }, [location]);
  return (
    <section className="week">
      <Header />
      <SideMenu />
    </section>
  );
};
export default WeeklyForecastPage;
