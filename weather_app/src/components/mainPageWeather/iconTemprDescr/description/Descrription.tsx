import { useAppSelector } from "hooks/reduxHooks";
import Paragraph from "ui/text/TextParag";

import Wikness from "../../../../assets/humidity.svg";
import Wind from "../../../../assets/wind.svg";
import WindDir from "../../../../assets/windsock.svg";

import IconDescr from "./iconText/IconText";

const Description = () => {
  const data = useAppSelector((state) => state.weather);
  const { currentWeather } = data;
  const { condition, wind_kmH, wind_dir, humidity } = currentWeather;
  return (
    <div className="main__descr-block">
      <Paragraph className="text">{condition}</Paragraph>
      <IconDescr src={Wind} text={`${wind_kmH} Km/h`} />
      <IconDescr src={WindDir} text={`${wind_dir}`} />
      <IconDescr src={Wikness} text={`${humidity} %`} />
    </div>
  );
};

export default Description;
