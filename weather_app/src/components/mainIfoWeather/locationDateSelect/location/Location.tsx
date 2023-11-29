import { useAppSelector } from "hooks/reduxHooks";
import Paragraph from "ui/text/TextParag";

const Location = () => {
  const data = useAppSelector((state) => state.weather);
  const { state } = data;
  const { location } = state;
  return (
    <>
      <Paragraph className="text">{location}</Paragraph>
    </>
  );
};
export default Location;
