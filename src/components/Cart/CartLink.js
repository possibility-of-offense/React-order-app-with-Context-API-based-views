import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { HeaderContext } from "../../context/HeaderContext";
import Badge from "../UI/Badge";
import classes from "./CartLink.module.css";

function CartLink(props) {
  const useCartContext = useContext(CartContext);
  const useHeaderContext = useContext(HeaderContext);

  function handleCartClick() {
    useHeaderContext.onChangeView("cart");
  }

  const [appendClass, setAppendClass] = useState(false);

  useEffect(() => {
    if (useCartContext.items.length > 0) {
      setAppendClass(true);

      let timer = setTimeout(() => {
        setAppendClass(false);
      }, 300);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [useCartContext.items]);

  return (
    <div
      onClick={handleCartClick}
      className={`${classes["cart-link"]} ${props.className} ${
        appendClass ? classes.animation : ""
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-cart"
        viewBox="0 0 16 16"
      >
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      </svg>
      &nbsp;
      <h6 className="m-0">Cart link</h6>
      &nbsp;
      <Badge className="bg-primary">{useCartContext.items.length}</Badge>
    </div>
  );
}

export default CartLink;
