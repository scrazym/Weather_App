import { useEffect } from "react";
import { useAppDispatch } from "hooks/reduxHooks";
import Wrapper from "ui/wrapperForMain&Card/Wrapper";

import IconTemprDescr from "./iconTemprDescr/IconTemprDescr";
import LocationDateSelect from "./locationDateSelect/LocationDateSelect";
import { fetchCurrentWeather } from "./getCurrentWeather";

import "./mainIfoWeather.scss";
const MainIfoWeather = () => {
  const dispatch = useAppDispatch();
  const location = "Moscow";

  useEffect(() => {
    dispatch(fetchCurrentWeather(location));
  }, [location]);

  return (
    <Wrapper className="wrapper wrapper__main main">
      <LocationDateSelect />
      <IconTemprDescr />
    </Wrapper>
  );
};

export default MainIfoWeather;
