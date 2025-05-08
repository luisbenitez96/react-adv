import { FormEvent } from "react";
import "../styles/styles.css";
import { useForm } from "../hooks/useForm";

export const RegisterPage = () => {
  const {
    onChange,
    resetForm,
    isValidEmail,
    formData,
    name,
    password,
    password2,
    email,
  } = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          type="email"
          placeholder="Email "
          name="email"
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Email no es valido</span>}

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
        />
        {password.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password.trim().length < 6 && password.trim().length > 0 && (
          <span> La contraseña debe tener 6 carácteres</span>
        )}

        <input
          type="password"
          placeholder="Repeat Password"
          name="password2"
          value={password2}
          onChange={onChange}
        />
        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password2.trim().length > 0 && password !== password2 && (
          <span>las contraseñas deben ser iguales </span>
        )}

        <button type="submit">Create</button>
        <button type="reset" onClick={resetForm}>
          Reset Form
        </button>
      </form>
    </div>
  );
};
