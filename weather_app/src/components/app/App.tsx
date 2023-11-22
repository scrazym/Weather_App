import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useTheme } from "context/theme";
import { MainPage } from "pages/MainPage";
import { PageNotFound } from "pages/Page404";

import "./App.scss";

function App() {
  const { theme } = useTheme();
  return (
    <div className="App" data-theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
