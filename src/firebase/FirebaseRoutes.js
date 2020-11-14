import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./FirebaseContext";

export const NeedLoggedInRoute = ({component: RouteComponent, ...givenComponents}) => {
  const currentUser = useContext(AuthContext);
  return (
    <Route
      {...givenComponents}
      render={(routeProps) => (!!currentUser ? <RouteComponent {...routeProps} /> : <Redirect to={givenComponents.redirect} />)}
    />
  );
};

export const NeedLoggedOutRoute = ({component: RouteComponent, ...givenComponents}) => {
  const currentUser = useContext(AuthContext);
  return (
    <Route
      {...givenComponents}
      render={(routeProps) => (!!currentUser ? <Redirect to={givenComponents.redirect} /> : <RouteComponent {...routeProps} />)}
    />
  );
};

/*사용법
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthContextProvider } from "./firebase/FirebaseContext";
import {NeedLoggedInRoute} from "./firebase/FirebasePrivateRoute";

<AuthContextProvider>
  <Router>
    <div>
      <NeedLoggedInRoute exact path="/" redirect="/login" component={Account} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>
</AuthContextProvider>
*/
