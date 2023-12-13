import { useAppDispatch } from "hooks/reduxHooks";
import { changeCityName } from "redux/weatherSlice";
import Paragraph from "ui/text/TextParag";

import Clock from "components/mainPageWeather/locationDateSelect/clock/Clock";
import Day from "components/mainPageWeather/locationDateSelect/day/Day";

import Location from "./location/Location";
import { Select } from "./select/Select";

const LocationDateSelect = () => {
  const dispatch = useAppDispatch();
  const handleChange = () => {
    dispatch(changeCityName("Moscow"));
    console.log("CLICK");
  };
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
        <button onClick={handleChange}>Click</button>
      </div>
    </div>
  );
};

export default LocationDateSelect;
