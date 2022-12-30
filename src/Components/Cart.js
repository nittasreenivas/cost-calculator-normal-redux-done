import { connect } from "react-redux";
import { useEffect, useState } from "react";
const Cart = (props) => {
  const [total, setTotal] = useState(0);
  console.log("props", props);
  const changeQty = (id, qty) => {
    props.dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        id,
        qty
      }
    });
  };
  useEffect(() => {
    setTotal(
      props.cart.Cart.reduce(
        (acc, curr) => acc + Number(curr.price) * curr.qty,
        0
      )
    );
  }, [props.cart.Cart]);
  return (
    <div className="cart">
      <b> CART</b>
      <b> subtotal:${total}</b>
      {props.cart.Cart.length > 0 ? (
        props.cart.Cart.map((item) => {
          return (
            <div key={item.id} className="cart-items">
              <img alt="title" src={item.thumbnail} width={100} />
              <h4> {item.title} </h4>
              <h5> ${item.price} </h5>
              <div className="qty">
                <button onClick={() => changeQty(item.id, item.qty - 1)}>
                  {" "}
                  -{" "}
                </button>
                <span> {item.qty} </span>
                <button onClick={() => changeQty(item.id, item.qty + 1)}>
                  {" "}
                  +{" "}
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <span style={{ padding: "10px", alignSelf: "center" }}>
          {" "}
          Cart is empty{" "}
        </span>
      )}
    </div>
  );
};

export default connect(function (store) {
  return store;
})(Cart);
