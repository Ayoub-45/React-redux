import React from "react";
import CartItem from "../cart-item/cart-item.component";
import "../cart-item/cart-item.styles.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const { itemList } = useSelector((state) => state.cart);
  console.log(itemList);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {itemList.map(({ id, price, name, quantity }) => (
          <li key={id}>
            <CartItem id={id} price={price} name={name} quantity={quantity} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
