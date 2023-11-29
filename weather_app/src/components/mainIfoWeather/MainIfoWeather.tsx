import { useEffect } from "react";
import { transformDataToday } from "api/axios";
import axios from "axios";
import { useAppDispatch } from "hooks/reduxHooks";
import { addCurrentWeather } from "redux/weatherSlice";
import Wrapper from "ui/wrapperForMain&Card/Wrapper";

import IconTemprDescr from "./iconTemprDescr/IconTemprDescr";
import LocationDateSelect from "./locationDateSelect/LocationDateSelect";

import "./mainIfoWeather.scss";
const MainIfoWeather = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios
      .get(
        "https://api.weatherapi.com/v1/current.json?key=19166433a4ba41139d581519232711&q=Minsk&aqi=no"
      )
      .then((response) => {
        if (!response) {
          throw new Error();
        } else {
          const result = response.data;
          dispatch(addCurrentWeather(transformDataToday(result)));
        }
      });
  }, []);
  return (
    <Wrapper className="wrapper wrapper__main main">
      <LocationDateSelect />
      <IconTemprDescr />
    </Wrapper>
  );
};

export default MainIfoWeather;
