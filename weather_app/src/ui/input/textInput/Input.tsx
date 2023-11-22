import { ClassAttributes, InputHTMLAttributes } from "react";
import { FieldHookConfig, useField } from "formik";

interface Other {
  label: string;
}

const MyTextInput = (
  props: Other &
    InputHTMLAttributes<HTMLInputElement> &
    ClassAttributes<HTMLInputElement> &
    FieldHookConfig<string>
) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <input className={props.className} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default MyTextInput;
