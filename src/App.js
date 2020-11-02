import { BrowserRouter as Router, Route } from "react-router-dom";
import Account from "./router/Account";
import Login from "./router/Login";
import { AuthContextProvider } from "./firebase/FirebaseContext";
import { useContext } from "react";
import PrivateRoute from "./firebase/FirebasePrivateRoute";
// import SignUp from "./router/SignUp";

const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Account} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    </AuthContextProvider>
  );
};

export default App;
