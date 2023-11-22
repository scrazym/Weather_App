type BtnProps = {
  className: string;
  text: string;
};
const Btn = ({ text, ...props }: BtnProps) => {
  return <div {...props}>{text}</div>;
};

export default Btn;
