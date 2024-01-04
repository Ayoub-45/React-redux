import Layout from "./components/layout/layout.component";
import Auth from "./components/auth/auth.component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Notification from "./components/notification/notification.component";
import { sendCartData } from "./redux/cart-slice";
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
    } else {
      dispatch(sendCartData(cartState));
    }
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
