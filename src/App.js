import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./router/Home";
import Login from "./router/Login";
import { AuthContextProvider } from "./firebase/FirebaseContext";
import { useContext } from "react";
// import SignUp from "./router/SignUp";

const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <div>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/signup" component={SignUp} /> */}
        </div>
      </Router>
    </AuthContextProvider>
  );
};

export default App;
