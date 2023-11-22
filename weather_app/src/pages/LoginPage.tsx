import SignupForm from "components/LoginForm/LoginForm";

import "./loginPage.scss";
const LoginPage = () => {
  return (
    <div className="login">
      <h1 className="text">Login page</h1>
      <SignupForm />
    </div>
  );
};

export default LoginPage;
