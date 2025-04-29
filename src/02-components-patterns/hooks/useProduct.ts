import { useEffect, useRef, useState } from "react";
import { InitialValue, onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValue?: InitialValue;
}
export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValue,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValue?.count || value);

  const isMounted = useRef(false);

  // el useRef es un hook que nos permite guradar un valor
  // y no se vuelve a ejecutar cada vez que se renderiza el componente
  // en este caso lo que hacemos es verificar si el onChange existe
  // y si existe es un componente controlado

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);

    // aqui lo que hacemos es asegurarnos que el nuevo valor no sea menor a 0
    // si el nuevo valor es menor a 0 le asignamos 0
    // si el nuevo valor es mayor a 0 le asignamos el nuevo valor
    // el nuevo valor lo hayamos sumando el valor actual del contador, con el calor
    //  que le pasamos, que ese valor se lo pasamos por medio del
    //  argumento de la funcion increaseBy
    // el valor que le pasamos es el que le pasamos en el boton de sumar o restar

    if (initialValue?.maxCount) {
      // si existe el maxCount lo que hacemos es comparar el nuevo valor con el
      //  maxCount

      newValue = Math.min(newValue, initialValue.maxCount);
      // si el nuevo valor es mayor al maxCount
      // lo que hacemos es asignarle el maxCount
      //  si el nuevo valor es menor al maxCount
      // lo que hacemos es asignarle el nuevo valor
    }

    // aqui obtenemos el valor anterior y le sumamos el nuevo valor y con la funcion math.max
    // nos aseguramos que el valor no sea menor a 0

    setCounter(newValue);

    onChange && onChange({ count: newValue, product }); // si onChange existe lo ejecutamos
  };
  const reset = () => {
    setCounter(initialValue?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    // si no esta montado el componente no hacemos nada

    setCounter(value);
    // cada vez que el valor cambie se va a ejecutar el useEffect y se va a actualizar el contador
    //  con el nuevo valor
  }, [value]);

  return {
    counter,

    isMaxCountReached:
      !!initialValue?.count && initialValue.maxCount === counter,
    // si initialValue existe y el maxCount es igual al contador

    maxCount: initialValue?.maxCount,

    increaseBy,
    reset,
  };
};
