import { useTheme } from "context/theme";

import { Header } from "components/header/Header";
import SideMenu from "components/sideMenu/SideMenu";

import "./App.scss";

function App() {
  const { theme } = useTheme();
  return (
    <div className="App" data-theme={theme}>
      <Header />
      <SideMenu />
    </div>
  );
}

export default App;
