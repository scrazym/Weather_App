import Theme from "context/theme";

import Styles from "../../context/theme/theme.module.css";

const Switcher = () => {
  return (
    <div className={Styles.wrapper}>
      <Theme.SimpleToggler />
    </div>
  );
};

export default Switcher;
