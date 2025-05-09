import "../styles/styles.css";
import { Formik, Form } from "formik";
import { MyTextInput } from "../components";
import * as Yup from "yup";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Must be 2 characters or more")
            .max(15, "Must be 15 characters or less")
            .required("Required"),

          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .min(6, "Must be 8 characters or more")

            .required("Required"),
          password2: Yup.string()
            .min(6, "Must be 8 characters or more")
            .oneOf([Yup.ref("password")], "Passwords must match")
            .required("Required"),
        })}>
        {({ handleReset }) => (
          <Form>
            <MyTextInput label=" Name" name="name" placeholder="Luis" />

            <MyTextInput
              label="Email Address"
              name="email"
              placeholder="junior@google.com"
              type="email"
            />
            <MyTextInput
              label="Password"
              name="password"
              placeholder="********"
              type="password"
            />
            <MyTextInput
              label="Confirm Password"
              name="password2"
              placeholder="********"
              type="password"
            />
            <button type="submit">Create</button>

            <button type="reset" onClick={handleReset}>
              Reset Form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
