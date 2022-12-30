import "./styles.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Products />
        <Cart />
      </div>
    </Provider>
  );
}
