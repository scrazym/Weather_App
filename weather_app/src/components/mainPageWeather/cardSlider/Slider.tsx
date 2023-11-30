import { useAppSelector } from "hooks/reduxHooks";

import Card from "components/card/Card";
import Spinner from "components/spinner/Spinner";

import "./slider.scss";
const Slider = () => {
  const hours = useAppSelector((state) => state.weather);
  const { loading, CurrentHoursWeather } = hours;
  const items = CurrentHoursWeather.length
    ? CurrentHoursWeather.map((hour, i) => {
        return (
          <Card key={i} src={hour.icon} time={hour.time} temp={hour.temp_C} />
        );
      })
    : null;
  const spinner = loading ? <Spinner /> : null;
  const item = !loading ? <div className="slider">{items}</div> : null;

  return (
    <>
      {item}
      {spinner}
    </>
  );
};

export default Slider;
