import { NavLink } from "react-router-dom";

import RegistrationForm from "components/form/registrationForm/RegistrationForm";

const RegistrationPage = () => {
  return (
    <div className="login">
      <h1 className="text">Registration page</h1>
      <RegistrationForm />
      <span className="text">
        Already have an account?
        <NavLink className="link link__register" to="/login">
          Log In
        </NavLink>
        s
      </span>
    </div>
  );
};

export default RegistrationPage;
