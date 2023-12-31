import IconWeather from "ui/iconWeather/iconWeather";
import Paragraph from "ui/text/TextParag";

interface Card {
  time: string;
  temp: number;
  condition: string;
}
const Card = ({ time, temp, condition }: Card) => {
  return (
    <div className="wrapper wrapper__card">
      <Paragraph className="text">{time.slice(-5)}</Paragraph>
      <IconWeather
        className="icon icon__card"
        condition={condition}
        time={time.slice(-5, -3)}
      />
      <Paragraph className="text">{`${temp}\u00b0C`}</Paragraph>
    </div>
  );
};

export default Card;
