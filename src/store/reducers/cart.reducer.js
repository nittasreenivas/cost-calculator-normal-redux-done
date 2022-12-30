const initialState = {
  Cart: []
};

const cartReducer = (state = initialState, action) => {
  if (action.type === "ADD_TO_CART") {
    return {
      ...state,
      Cart: [{ ...action.payload }, ...state.Cart]
    };
  }
  if (action.type === "REMOVE_FROM_CART") {
    return {
      ...state,
      Cart: state.Cart.filter((c) => c.id !== action.payload)
    };
  }
  if (action.type === "CHANGE_CART_QTY") {
    return {
      ...state,
      Cart: state.Cart.filter((c) =>
        c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
      )
    };
  }
  return state;
};

export default cartReducer;
