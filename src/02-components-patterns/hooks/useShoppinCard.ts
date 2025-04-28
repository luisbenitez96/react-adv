import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCard = () => {
  const [shoppingCard, setShoppingCard] = useState<{
    [key: string]: ProductInCart;
  }>({
    // "1": { ...product, count: 10 },
    // "2": { ...product2, count: 2 },
  });

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    // console.log(count, product);

    setShoppingCard((oldShoppingCard) => {
      const productInCart: ProductInCart = oldShoppingCard[product.id] || {
        ...product,
        count: 0,
      };
      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCard,
          [product.id]: productInCart,
        };
      }

      //* Borrar el producto

      const { [product.id]: toDelete, ...rest } = oldShoppingCard;

      // si el contador es 0 significa que el producto ya no existe en el
      //  carrito

      return rest; // devolvemos el resto de los productos

      // lo que hacemos es desestructurar el objeto y obtener el producto que ya
      //  existe en el carrito

      // if (count === 0) {
      //   const { [product.id]: toDelete, ...rest } = oldShoppingCard;

      //   // si el contador es 0 significa que el producto ya no existe en el
      //   //  carrito

      //   return rest; // devolvemos el resto de los productos
      // }

      // return {
      //   ...oldShoppingCard,
      //   [product.id]: { ...product, count },
      //   // lo que hacemos es crear un nuevo objeto y le asignamos el producto
      //   // y el count que viene del evento
      //   // y si el producto ya existe en el carrito le asignamos el nuevo count
      // };
    });
  };
  return {
    shoppingCard,
    onProductCountChange,
  };
};
