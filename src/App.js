import Layout from "./components/layout/layout.component";
import Auth from "./components/auth/auth.component";
import { useSelector } from "react-redux";

function App() {
  const authState = useSelector((state) => state.auth);
  const { isLogin } = authState;

  return (
    <div className="App">
      {!isLogin && <Auth />}
      {isLogin && <Layout />}
    </div>
  );
}

export default App;
