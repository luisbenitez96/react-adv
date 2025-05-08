import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  [x: string]: any; // para aceptar cualquier propiedad o parametro extra que le queramos añadir
}

export const MyTextInput = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />

      <ErrorMessage name={props.name} component="span" />

      {/* {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )} */}
    </>
  );
};
