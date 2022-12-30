import { useEffect } from "react";
import { connect } from "react-redux";

const Products = (props) => {
  console.log("props", props);
  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const { products } = await response.json();
    console.log(products);
    props.dispatch({
      type: "FETCH_PRODUCTS",
      payload: products
    });
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  // const addTocart = () => {
  //   console.log('addTocart button clicked')
  //   props.dispatch({
  //     type:"ADD_TO_CART",
  //     payload:{
  //     id:id,
  //     title:title,
  //     thumbnail:thumbnail,
  //     price:price,
  //     qty:1
  //     },
  //   })
  // }
  return (
    <div className="products">
      {props.product.Products.map((item) => {
        const { id, title, price, thumbnail } = item;
        return (
          <div key={id} className="phones">
            <h4> {title} </h4>
            <img alt="title" src={thumbnail} width={223} />
            <p> ${price} </p>
            {props.cart.Cart.some((p) => p.id === id) ? (
              <button
                className="remove"
                onClick={() =>
                  props.dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: id
                  })
                }
              >
                {" "}
                Remove from Cart{" "}
              </button>
            ) : (
              <button
                className="add"
                onClick={() =>
                  props.dispatch({
                    type: "ADD_TO_CART",
                    payload: {
                      id: id,
                      title: title,
                      thumbnail: thumbnail,
                      price: price,
                      qty: 1
                    }
                  })
                }
              >
                {" "}
                Add to cart{" "}
              </button>
            )}
            {/* <button className="add"> Add to cart </button> <br/> */}
            {/* // <button className="remove"> Remove from Cart </button> */}
          </div>
        );
      })}
    </div>
  );
};

export default connect(function (store) {
  return store;
})(Products);
