import { Form, Formik } from "formik";
import MyCheckbox from "ui/input/checkbox/MyCheckBox";
import MyTextInput from "ui/input/textInput/Input";
import * as Yup from "yup";

import "./loginForm.scss";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const SignupForm: React.FC<object> = () => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          password: "",
          acceptedTerms: false, // added for our checkbox
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          password: Yup.string()
            .matches(passwordRules, {
              message: "Please create a stronger password",
            })
            .required("Required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
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
            label="Enter your password"
            name="password"
            type="password"
            placeholder="fZ23Cds"
            className="form__input"
          />

          <MyCheckbox
            text="I accept the terms and conditions"
            name="acceptedTerms"
          />

          <button className="btn" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
};
export default SignupForm;
