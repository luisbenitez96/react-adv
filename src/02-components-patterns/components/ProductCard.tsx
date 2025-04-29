import { createContext, JSX, ReactElement } from "react";
import { useProduct } from "../hooks/useProduct";

import styles from "../styles/styles.module.css";
import {
  InitialValue,
  onChangeArgs,
  Product,
  ProductCardHandlers,
  ProductContextProps,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

// el provider es el que va a envolver a los hijos y va a proveer el contexto,el provider
//  viene del createContex. el contexto es
// el que va a contener la información que queremos compartir entre los componentes hijos

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValue?: InitialValue;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValue,
}: Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
    useProduct({
      onChange,
      product,
      value,
      initialValue,
    });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        maxCount,
        product,
      }}>
      <div className={`${styles.productCard} ${className} `} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValue?.maxCount,
          product,

          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
