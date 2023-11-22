import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useTheme } from "context/theme";
import LoginPage from "pages/LoginPage";
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
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
