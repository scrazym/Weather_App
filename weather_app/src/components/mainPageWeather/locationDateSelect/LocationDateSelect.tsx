import Paragraph from "ui/text/TextParag";

import Clock from "components/mainPageWeather/locationDateSelect/clock/Clock";
import Day from "components/mainPageWeather/locationDateSelect/day/Day";

import Location from "./location/Location";
import { Select } from "./select/Select";

const LocationDateSelect = () => {
  return (
    <div className="main__title">
      <div className="main__location">
        <Location />
        <Paragraph className="text">Weather today</Paragraph>
        <Day />
        <Clock />
      </div>
      <div className="main__select">
        <Paragraph className="text">Select</Paragraph>
        <Select />
      </div>
    </div>
  );
};

export default LocationDateSelect;
