import React, { useContext, useImperativeHandle, useRef } from "react";
import { CartContext } from "../../context/CartContext";
import { ItemsContext } from "../../context/ItemsContext";
import Item from "./Item";

const Items = React.forwardRef((props, ref) => {
  const useItemsContext = useContext(ItemsContext);
  const useCartContext = useContext(CartContext);

  const mainContainerRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      cont: mainContainerRef.current,
    };
  });

  // TODO add alert
  const handleOrderProducts = () => {
    useCartContext.orderProducts();
    useItemsContext.onChangeView("items");
  };

  return (
    <div
      ref={mainContainerRef}
      className="main-container container p-3 mt-4 rounded shadow bg-light"
    >
      <h2 className="text-center mb-4">{useItemsContext.title}</h2>
      {useCartContext.view === "cart" && useCartContext.items.length > 0 && (
        <div className="text-center pb-3">
          <button onClick={handleOrderProducts} className="btn btn-primary">
            Order products
          </button>
        </div>
      )}
      <div className="list-group">
        {useItemsContext.items.length > 0 ? (
          useItemsContext.items.map((item) => {
            return <Item item={item} key={item.id} />;
          })
        ) : (
          <p className="text-center">
            No items {useItemsContext.title.includes("cart") && " in cart"}
          </p>
        )}
      </div>
    </div>
  );
});

export default Items;
