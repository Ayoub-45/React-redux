import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";
const defaultState = {
  itemList: [],
  totalQuantity: 0,
  showCart: false,
};
const cartSlice = createSlice({
  name: "Cart",
  initialState: defaultState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const productFound = state.itemList.find(
        (item) => newItem.id === item.id
      );
      if (productFound) {
        productFound.quantity++;
        productFound.totalPrice += productFound.price;
      } else {
        state.itemList.push({
          id: newItem.id,
          quantity: 1,
          price: newItem.price,
          name: newItem.name,
          totalPrice: newItem.price,
        });
      }
      state.totalQuantity++;
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
    removeFromCart(state, action) {
      const productFound = state.itemList.find(
        (item) => item.id === action.payload
      );
      if (productFound) {
        if (productFound.quantity === 0) {
          state.itemList = state.itemList.filter(
            (item) => productFound.id !== item.id
          );
          state.showCart = false;
        } else {
          productFound.quantity--;
        }
      }
    },
  },
});
export const sendCartData = (cart) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://redux-73e0c-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      dispatch(
        uiActions.showNotification({
          open: true,
          type: "warning",
          message: "Sending request",
        })
      );
      const data = await response.json();
      if (data) {
        dispatch(
          uiActions.showNotification({
            message: "Data successfully sent ",
            type: "success",
            open: true,
          })
        );
      }
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          message: "faild to send data to the backend",
          type: "faild",
          open: false,
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice;
