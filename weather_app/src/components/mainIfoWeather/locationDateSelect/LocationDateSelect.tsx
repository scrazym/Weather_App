import Clock from "components/clock/Clock";
import Day from "components/day/Day";

const LocationDateSelect = () => {
  return (
    <div className="main__location">
      <h2>Locatiion</h2>
      <Day />
      <Clock />
    </div>
  );
};

export default LocationDateSelect;
