import { useEffect } from "react";
import { useAppDispatch } from "hooks/reduxHooks";
import Wrapper from "ui/wrapperForMain&Card/Wrapper";

import { fetchCurrentHoursWeather } from "./getWeatherFromApi/getCurrentHoursForecast";
import { fetchCurrentWeather } from "./getWeatherFromApi/getCurrentWeather";
import IconTemprDescr from "./iconTemprDescr/IconTemprDescr";
import LocationDateSelect from "./locationDateSelect/LocationDateSelect";

import "./mainIfoWeather.scss";
const MainIfoWeather = () => {
  const dispatch = useAppDispatch();
  const location = "Moscow";

  useEffect(() => {
    dispatch(fetchCurrentWeather(location));
    dispatch(fetchCurrentHoursWeather(location));
  }, [location]);

  return (
    <Wrapper className="wrapper wrapper__main main">
      <LocationDateSelect />
      <IconTemprDescr />
    </Wrapper>
  );
};

export default MainIfoWeather;
