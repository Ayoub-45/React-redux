import React from "react";
import Cart from "../cart/cart.component";
import "./header.styles.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../redux/auth-slice";
const Header = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logOut());
  };
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <button className="logout-btn" onClick={logoutHandler}>
              Logout
            </button>
          </li>
          <li>
            <Cart />
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
