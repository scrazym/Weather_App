import { Link } from "ui/link/title";

type BtnProps = {
  className: string;
  text: string;
  path: string;
};
const Btn = ({ text, path, className }: BtnProps) => {
  return <Link path={path} text={text} className={className} />;
};

export default Btn;
