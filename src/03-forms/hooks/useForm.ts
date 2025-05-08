import { useState, ChangeEvent } from "react";

export const useForm = <T>(initState: T) => {
  const [formData, setFormData] = useState(initState);

  // la <T> es para que el tipo de formData sea el mismo que el de initState
  // el <T> es un tipo generico, es decir, que se puede usar con cualquier tipo de dato
  // el initState es el estado inicial del formulario, es decir, el objeto que contiene los datos del formulario
  // el formData es el estado del formulario, es decir, el objeto que contiene los datos del formulario

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const resetForm = () => {
    setFormData({ ...initState });
  };
  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  return {
    ...formData,
    formData,

    isValidEmail,
    onChange,
    resetForm,
  };
};
