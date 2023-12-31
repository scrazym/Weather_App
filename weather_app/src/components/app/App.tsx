import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useTheme } from "context/theme";
import LoginPage from "pages/loginPage/LoginPage";
import { MainPage } from "pages/MainPage";
import { PageNotFound } from "pages/Page404";
import RegistrationPage from "pages/registrationPage/RegistrationPage";
import ThreeDaysForecastPage from "pages/threeDaysForecastPage/ThreeDaysForecastPage";

import "./App.scss";

function App() {
  const { theme } = useTheme();
  return (
    <div className="App" data-theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/week" element={<ThreeDaysForecastPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
