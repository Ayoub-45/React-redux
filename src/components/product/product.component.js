import React from "react";
import "./product.styles.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/cart-slice";
const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();
  const addItemToCart = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
      })
    );
  };
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addItemToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
