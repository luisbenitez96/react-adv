import { useEffect, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}
export const useProduct = ({
  onChange,
  product,
  value = 0,
}: useProductArgs) => {
  const [counter, setCounter] = useState(value);

  // el useRef es un hook que nos permite guradar un valor
  // y no se vuelve a ejecutar cada vez que se renderiza el componente
  // en este caso lo que hacemos es verificar si el onChange existe
  // y si existe es un componente controlado

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);

    // aqui obtenemos el valor anterior y le sumamos el nuevo valor y con la funcion math.max
    // nos aseguramos que el valor no sea menor a 0

    setCounter(newValue);

    onChange && onChange({ count: newValue, product }); // si onChange existe lo ejecutamos
  };
  useEffect(() => {
    setCounter(value);
    // cada vez que el valor cambie se va a ejecutar el useEffect y se va a actualizar el contador
    //  con el nuevo valor
  }, [value]);

  return {
    counter,
    increaseBy,
  };
};
