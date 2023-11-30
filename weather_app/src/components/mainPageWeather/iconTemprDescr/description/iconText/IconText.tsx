import Paragraph from "ui/text/TextParag";

const IconDescr = ({ text, src }: { text: string | number; src: string }) => {
  return (
    <div className="main__descr-wrapper">
      <div className="main__descr-icon_svg">
        <img className="img" src={src} alt="" />
      </div>

      <Paragraph className="text">{text}</Paragraph>
    </div>
  );
};

export default IconDescr;
