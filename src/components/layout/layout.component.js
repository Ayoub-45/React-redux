import React from "react";
import Header from "../header/header.component";
import Products from "../products/products.component";
import "./layout.styles.css";
import { useSelector } from "react-redux";
import CartItems from "../cart-items/cart-items.component";
const Layout = () => {
  let total = 100;
  const { showCart } = useSelector((state) => state.cart);
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCart && <CartItems />}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
