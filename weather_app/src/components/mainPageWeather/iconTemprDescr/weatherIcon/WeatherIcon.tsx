import { useAppSelector } from "hooks/reduxHooks";

export const WeatherIcon = () => {
  const data = useAppSelector((state) => state.weather);
  const { currentWeather } = data;
  const { icon } = currentWeather;
  return (
    <div className="main__descr-icon">
      <img src={icon} alt="" />
    </div>
  );
};
