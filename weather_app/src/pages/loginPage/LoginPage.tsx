import { NavLink } from "react-router-dom";

import SignupForm from "components/form/LoginForm/LoginForm";

import "./loginPage.scss";
const LoginPage = () => {
  return (
    <div className="login">
      <h3 className="text">Login page</h3>
      <SignupForm />
      <span className="text">
        Do not have an account yet?
        <NavLink className="link link__register" to="/registration">
          Register
        </NavLink>{" "}
        for free now
      </span>
    </div>
  );
};

export default LoginPage;
