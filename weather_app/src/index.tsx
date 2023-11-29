import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Theme from "context/theme";
import { store } from "redux/store";

import "bootstrap/dist/css/bootstrap.min.css";

import App from "./components/app/App";

import "../src/style/index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <Theme>
      <App />
    </Theme>
  </Provider>
);
