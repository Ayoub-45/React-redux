import Layout from "./components/layout/layout.component";
import Auth from "./components/auth/auth.component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Notification from "./components/notification/notification.component";
import { uiActions } from "./redux/ui-slice";

let isFirstRender = true;
function App() {
  const { isLogin } = useSelector((state) => state.auth);
  const cartState = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    const sendData = async () => {
      try {
        dispatch(
          uiActions.showNotification({
            open: true,
            type: "warning",
            message: "Sending request",
          })
        );
        const response = await fetch(
          "https://redux-73e0c-default-rtdb.firebaseio.com/cartItems.json",
          {
            method: "PUT",
            body: JSON.stringify(cartState),
          }
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
    sendData();
  }, [cartState, dispatch]);
  return (
    <div className="App">
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {!isLogin && <Auth />}
      {isLogin && <Layout />}
    </div>
  );
}

export default App;
