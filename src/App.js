import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./router/Home";
// import Login from "./router/Login";
// import SignUp from "./router/SignUp";

{/* <header className="App-header">
Login for firebase
</header>
<FirebaseAuth /> */}

function App() {
  return (

    <Router>
      <div>
        <Route exact path="/home" component={Home} />
        {/* <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} /> */}
      </div>
    </Router>

  );
}

export default App;
