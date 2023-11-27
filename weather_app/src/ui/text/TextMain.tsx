import "./text.scss";
interface Text {
  className: string;
  children: string;
}
const Paragraph = ({ className, children }: Text) => {
  return <p className={className}>{children}</p>;
};

export default Paragraph;
