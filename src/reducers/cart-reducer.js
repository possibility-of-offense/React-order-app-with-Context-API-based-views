function cartReducer(state, action) {
  switch (action.type) {
    case "APPEND_TO_CART":
      state = {
        ...state,
        isCartEmpty: false,
        items: state.items.slice().concat(action.payload),
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
    default:
      break;
  }

  return state;
}

export default cartReducer;
