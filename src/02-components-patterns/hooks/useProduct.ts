import { useState } from "react";
export const useProduct = () => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    setCounter((prev) => Math.max(prev + value, 0));
  };

  // aqui obtenemos el valor anterior y le sumamos el nuevo valor y con la funcion math.max
  // nos aseguramos que el valor no sea menor a 0

  return {
    counter,
    increaseBy,
  };
};
