import Wrapper from "ui/wrapperForMain&Card/Wrapper";

import IconTemprDescr from "./iconTemprDescr/IconTemprDescr";

import "./mainIfoWeather.scss";
const MainIfoWeather = () => {
  return (
    <Wrapper className="wrapper wrapper__main main">
      <IconTemprDescr />
    </Wrapper>
  );
};

export default MainIfoWeather;
