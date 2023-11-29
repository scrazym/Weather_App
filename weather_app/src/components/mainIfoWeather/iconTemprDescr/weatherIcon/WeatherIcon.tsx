import { useAppSelector } from "hooks/reduxHooks";

export const WeatherIcon = () => {
  const data = useAppSelector((state) => state.weather);
  const { state } = data;
  const { icon } = state;
  return (
    <div className="main__descr-icon">
      <img src={icon} alt="" />
    </div>
  );
};
