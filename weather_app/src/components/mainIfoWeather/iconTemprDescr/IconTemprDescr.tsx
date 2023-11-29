import { useAppSelector } from "hooks/reduxHooks";
import Paragraph from "ui/text/TextParag";

import Description from "./description/Descrription";
import { WeatherIcon } from "./weatherIcon/WeatherIcon";

const IconTemprDescr = () => {
  const data = useAppSelector((state) => state.weather);
  const { state } = data;
  const { current_t_C } = state;
  return (
    <div className="main__descr">
      <WeatherIcon />
      <Paragraph className="text text__large">{`${current_t_C}\u00b0C`}</Paragraph>
      <Description />
    </div>
  );
};
export default IconTemprDescr;
