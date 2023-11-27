import Wrapper from "ui/wrapperForMain&Card/Wrapper";

import IconTemprDescr from "./iconTemprDescr/IconTemprDescr";
import LocationDateSelect from "./locationDateSelect/LocationDateSelect";

import "./mainIfoWeather.scss";
const MainIfoWeather = () => {
  return (
    <Wrapper className="wrapper wrapper__main main">
      <LocationDateSelect />
      <IconTemprDescr />
    </Wrapper>
  );
};

export default MainIfoWeather;
