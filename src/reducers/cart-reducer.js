function cartReducer(state, action) {
  switch (action.type) {
    case "APPEND_TO_CART":
      const checkForTheItem = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let items;
      if (checkForTheItem === -1) {
        items = state.items.slice().concat(action.payload);
      } else {
        items = state.items.slice().map((item) => {
          if (item.id === action.payload.id) {
            item["quantity"]++;
            return item;
          } else {
            return item;
          }
        });
      }

      state = {
        ...state,
        isCartEmpty: false,
        items: items,
      };

      break;

    case "REMOVE_FROM_CART":
      const filteredProducts = state.items
        .slice()
        .filter((product) => product.id !== action.payload.id);

      state = { ...state, items: filteredProducts };
      break;

    case "ORDER_PRODUCTS":
      state = {
        ...state,
        items: [],
      };
      break;
    default:
      break;
  }

  return state;
}

export default cartReducer;
