import { combineReducers } from "redux";
import cartReducer from "./cart.reducer";
import productReducer from "./product.reducer";

const reducer = combineReducers({
  product: productReducer,
  cart: cartReducer
});

export default reducer;
