import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./router/Home";
import Login from "./router/Login";
import { AuthContextProvider } from "./firebase/FirebaseContext";
import { useContext } from "react";
import { NeedLoggedInRoute, NeedLoggedOutRoute } from "./firebase/FirebaseRoutes";
// import SignUp from "./router/SignUp";

const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <div>
          <NeedLoggedInRoute exact path="/home" redirect="/login" component={Home} />
          <NeedLoggedOutRoute exact path="/login" redirect="/home" component={Login} />
        </div>
      </Router>
    </AuthContextProvider>
  );
};

export default App;
