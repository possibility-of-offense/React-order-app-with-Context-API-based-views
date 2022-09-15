import { useContext, useEffect, useReducer, useRef } from "react";
import { CartContext } from "../../context/CartContext";
import { ItemsContext } from "../../context/ItemsContext";
import itemReducer from "../../reducers/item-reducer";
import Button from "../UI/Button";
import Input from "../UI/Input";
import SmallWarningInfo from "../UI/SmallWarningInfo";
import classes from "./Item.module.css";

function Item({ item }) {
  const useCartContext = useContext(CartContext);
  const useItemsContext = useContext(ItemsContext);

  const inputRef = useRef();

  const [itemState, dispatchItem] = useReducer(itemReducer, {
    inputValue: 1,
    isValidInput: true,
    isValidForm: true,
    isFormSubmitted: null,
  });

  function handleInputChange(e) {
    dispatchItem({ type: "VALIDATE_INPUT", payload: e.target.value });
  }

  function handleInputBlur(e) {
    dispatchItem({ type: "INPUT_BLUR" });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    dispatchItem({ type: "FORM_SUBMISSION" });
    if (itemState.isValidInput) {
      const date = new Date();
      useCartContext.appendToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: itemState.inputValue,
        dateAdded: `${date.getDate()}/${
          date.getMonth() + 1
        }/${date.getFullYear()}`,
      });
    }
  }

  function handleParentDivClick() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  useEffect(() => {
    if (useCartContext.view === "cart") {
      useItemsContext.onSetItems(useCartContext.items);
    }
  }, [useCartContext.items]);

  function handleRemoveFromCart(item) {
    useCartContext.removeFromCart(item);
  }

  return (
    <div
      onClick={handleParentDivClick}
      className={`d-flex align-items-center justify-content-between list-group-item list-group-item-action ${classes.item}`}
    >
      <div>
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1 text-primary">{item.name}</h5>
        </div>
        <p className="mb-1">{item.description}</p>
        <small className="fs-5">
          {useCartContext.view === "cart"
            ? `$${item.price * item.quantity}`
            : `${item.price}`}
        </small>
        <br />
        <small>Added {item.dateAdded}</small>
      </div>
      {useCartContext.view !== "cart" ? (
        <div>
          <form onSubmit={handleFormSubmit}>
            {itemState.isFormSubmitted === true &&
              itemState.isValidForm === false && (
                <SmallWarningInfo className="text-end">
                  The form is not valid
                </SmallWarningInfo>
              )}
            <div className="mb-2">
              <div className="d-flex align-items-center">
                &nbsp;
                <Input
                  ref={inputRef}
                  type="number"
                  value={itemState.inputValue}
                  onChange={handleInputChange}
                  onClick={handleInputBlur}
                  onBlur={handleInputBlur}
                  className={`form-control ${
                    itemState.isValidInput === false && classes["bg-invalid"]
                  }`}
                  labelClassName="form-label fw-bold m-0"
                  id={item.id}
                >
                  Quantity
                </Input>
              </div>
            </div>
            <div className={classes.action}>
              <div className="d-flex align-items-center">
                <p className="m-0">
                  Price: $ {item.price * itemState.inputValue}
                </p>
                &nbsp;
                <Button type="submit" className="btn btn-primary">
                  +Add
                </Button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <Button
            onClick={() => handleRemoveFromCart(item)}
            className="btn btn-danger"
          >
            Delete
          </Button>
        </div>
      )}
    </div>
  );
}

export default Item;
