import Container from "react-bootstrap/Container";

import "./wrapper.scss";

const Wrapper = ({
  className = "wrapper",
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return <Container className={className}>{children}</Container>;
};
export default Wrapper;
