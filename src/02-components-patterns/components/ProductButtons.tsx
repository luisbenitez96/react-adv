import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}
export const ProductButtons = ({ className, style }: Props) => {
  const { increaseBy, counter, maxCount } = useContext(ProductContext);

  // el useContext es el que va a consumir el contexto, el useContext es un hook que
  //  nos permite acceder al contexto y el contexto es el que va a contener la
  //  información que
  //  queremos compartir entre los componentes hijos.
  //  en este caso utilizamos este hook porque queremos mandarle a nuestros c
  //  componentes hijos, la información que tenemos en el provider

  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,

    [counter, maxCount]

    // el useCallback es un hook que nos permite memorizar una funcion
    // y no se vuelve a ejecutar cada vez que se renderiza el componente
  );

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}> {counter} </div>
      <button
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
        onClick={() => increaseBy(+1)}>
        +
      </button>
    </div>
  );
};
