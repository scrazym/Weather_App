import { useAppSelector } from "hooks/reduxHooks";
import IconWeather from "ui/iconWeather/iconWeather";
import Paragraph from "ui/text/TextParag";

import Description from "./description/Descrription";

const IconTemprDescr = () => {
  const data = useAppSelector((state) => state.weather);
  const { currentWeather } = data;
  const { current_t_C, condition, time } = currentWeather;
  return (
    <div className="main__descr">
      <div className="main__icon">
        <IconWeather className="icon" condition={condition} time={time} />
        <Paragraph className="text text__large">{`${current_t_C}\u00b0C`}</Paragraph>
      </div>
      <Description />
    </div>
  );
};
export default IconTemprDescr;
