import { useAppSelector } from "hooks/reduxHooks";
import Paragraph from "ui/text/TextParag";

const IconTemprDescr = () => {
  const data = useAppSelector((state) => state.weather);
  const { state } = data;
  const { icon, current_t_C } = state;
  return (
    <div className="main__descr">
      <img src={icon} />
      <Paragraph className="text text__large">{current_t_C}</Paragraph>
    </div>
  );
};
export default IconTemprDescr;
