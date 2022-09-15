import React, { useReducer } from "react";
import cartReducer from "../reducers/cart-reducer";

export const CartContext = React.createContext({
  items: [],
  isCartEmpty: true,
  appendToCart: (item) => {},
  removeFromCart: (item) => {},
  orderProducts: () => {},
  view: "items",
});

function CartContextWrapper(props) {
  const [cartState, dispatchCart] = useReducer(cartReducer, {
    items: [],
    isCartEmpty: true,
  });

  function handleAppendToCart(item) {
    dispatchCart({ type: "APPEND_TO_CART", payload: item });
  }

  function handleRemoveFromCart(item) {
    dispatchCart({ type: "REMOVE_FROM_CART", payload: item });
  }

  function handleOrderProducts(item) {
    dispatchCart({ type: "ORDER_PRODUCTS", payload: item });
  }

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        isCartEmpty: cartState.isCartEmpty,
        appendToCart: handleAppendToCart,
        removeFromCart: handleRemoveFromCart,
        orderProducts: handleOrderProducts,
        view: props.view,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContextWrapper;
