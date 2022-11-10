import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";

const MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    dateAdded: "2 days ago",
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    dateAdded: "5 days ago",
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    dateAdded: "1 day ago",
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    dateAdded: "12 days ago",
  },
];

export const ItemsContext = React.createContext({
  items: [],
  title: "Items to order",
  onChangeView: () => {},
});

const ItemsContextWrapper = (props) => {
  const [items, setItems] = useState(MEALS);
  const [title, setTitle] = useState("Items to order");

  const useCartContext = useContext(CartContext);

  useEffect(() => {
    switch (props.view) {
      case "items":
        setItems(MEALS);
        setTitle("Items to order");
        break;
      case "cart":
        setItems(useCartContext.items);
        setTitle("Items in cart");
        break;
    }
  }, [props.view]);

  useEffect(() => {
    if (props.searchedWord) {
      setItems((prev) =>
        prev.filter((el) =>
          el.name.toLowerCase().includes(props.searchedWord.toLowerCase())
        )
      );
    }
  }, [props.searchedWord]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        title,
        onChangeView: props.onChangeView,
        onSetItems: setItems,
      }}
    >
      {props.children}
    </ItemsContext.Provider>
  );
};

export default ItemsContextWrapper;
