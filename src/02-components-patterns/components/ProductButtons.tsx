import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export const ProductButtons = () => {
  const { increaseBy, counter } = useContext(ProductContext);

  // el useContext es el que va a consumir el contexto, el useContext es un hook que nos
  //  permite acceder al contexto y el contexto es el que va a contener la información que
  //  queremos compartir entre los componentes hijos.

  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>

      <div className={styles.countLabel}> {counter} </div>

      <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
        +
      </button>
    </div>
  );
};
