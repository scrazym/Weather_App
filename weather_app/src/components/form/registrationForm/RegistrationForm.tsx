import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import MyCheckbox from "ui/input/checkbox/MyCheckBox";
import MyTextInput from "ui/input/textInput/Input";
import * as Yup from "yup";

import "./registrationForm.scss";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const RegistrationForm: React.FC<object> = () => {
  const navigate = useNavigate();

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          password: "",
          acceptedTerms: false,
          email: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .min(2, "Must be 2 characters or more")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          password: Yup.string()
            .matches(passwordRules, {
              message: "Please create a stronger password",
            })
            .required("Required"),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password")], "Password do not match")
            .matches(passwordRules, {
              message: "Please create a stronger password",
            })
            .required("Required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            navigate(`/`, { replace: true });
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            resetForm({
              values: {
                firstName: "",
                lastName: "",
                password: "",
                acceptedTerms: false,
                email: "",
                confirmPassword: "",
              },
            });
          }, 400);
        }}
      >
        <Form className="form">
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
            className="form__input"
          />

          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
            className="form__input"
          />
          <MyTextInput
            label="Email"
            name="email"
            type="email"
            placeholder="example@example.com"
            className="form__input"
          />
          <MyTextInput
            label="Enter your password"
            name="password"
            type="password"
            placeholder="*******"
            className="form__input"
          />
          <MyTextInput
            label="Confirm your password"
            name="confirmPassword"
            type="password"
            placeholder="*******"
            className="form__input"
          />

          <MyCheckbox
            text="I accept the terms and conditions"
            name="acceptedTerms"
          />
          <button className="btn" type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </>
  );
};
export default RegistrationForm;
