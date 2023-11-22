import ReactDOM from "react-dom/client";
import Theme from "context/theme";

import "bootstrap/dist/css/bootstrap.min.css";

import App from "./components/app/App";

import "../src/style/index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Theme>
    <App />
  </Theme>
);
