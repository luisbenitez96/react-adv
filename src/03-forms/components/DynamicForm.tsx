import { Form, Formik } from "formik";
import formJson from "../data/custom-form.json";
import { MyTextInput } from "./MyTextInput";
import { MySelect } from "./MySelect";
import * as Yup from "yup";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;
  // este if sirve para evitar que se rompa el programa si no hay validaciones, si hay validaciones se      ejecuta el siguiente for, y si no hay validaciones no se ejecuta.

  let schema = Yup.string();
  for (const rule of input.validations) {
    // este for sirve para recorrer las validaciones, pero si no hay validaciones no se ejecuta
    if (rule.type === "required") {
      schema = schema.required("is required");
    }
    if (rule.type === "minLength") {
      schema = schema.min(
        (rule as any).value || 2,
        `Minimum ${(rule as any).value || 2} characters`
      );
    }
    if (rule.type === "email") {
      schema = schema.email("Invalid email address");
    }
  }
  requiredFields[input.name] = schema;
}

const validationsSchema = Yup.object({ ...requiredFields });
export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationsSchema}
        onSubmit={(values) => {
          console.log(values);
        }}>
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === "input" || type === "password" || type === "email") {
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    label={label}
                    name={name}
                    placeholder={placeholder}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelect key={name} label={label} name={name}>
                    <option value="">Select an option</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </MySelect>
                );
              }

              throw new Error(`Unknown type: ${type}`);
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
