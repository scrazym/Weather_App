import { ClassAttributes, InputHTMLAttributes } from "react";
import { FieldHookConfig, useField } from "formik";
interface Child {
  text: string;
  name: string;
}
const MyCheckbox = (
  props: Child &
    InputHTMLAttributes<HTMLInputElement> &
    ClassAttributes<HTMLInputElement> &
    FieldHookConfig<string>
) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {props.text}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default MyCheckbox;
