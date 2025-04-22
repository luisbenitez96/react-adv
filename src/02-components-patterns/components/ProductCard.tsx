import { createContext } from "react";
import { useProduct } from "../hooks/useProduct";

import styles from "../styles/styles.module.css";
import {
  ProductCardProps,
  ProductContextProps,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

// el provider es el que va a envolver a los hijos y va a proveer el contexto,el provider
//  viene del createContex. el contexto es
// el que va a contener la información que queremos compartir entre los componentes hijos

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
