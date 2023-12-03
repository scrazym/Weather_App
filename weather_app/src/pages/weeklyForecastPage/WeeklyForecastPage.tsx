import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";

import { Header } from "components/header/Header";
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
    </section>
  );
};
export default WeeklyForecastPage;
