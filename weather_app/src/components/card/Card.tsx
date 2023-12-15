import Paragraph from "ui/text/TextParag";

interface Card {
  src: string;
  time: string;
  temp: number;
}
const Card = ({ src, time, temp }: Card) => {
  return (
    <div className="wrapper wrapper__card">
      <Paragraph className="text">{time.slice(-5)}</Paragraph>
      <div className="main__descr-icon_svg main__descr-icon_svg_lg">
        <img className="img" src={src} alt="icon" />
      </div>
      <Paragraph className="text">{`${temp}\u00b0C`}</Paragraph>{" "}
    </div>
  );
};

export default Card;
