# firebase

all in one firebase

## 주의사항

.env파일을 생성하지 않으면 화면이 뜨지 않습니다!!!

```env
REACT_APP_API_KEY=""
REACT_APP_AUTH_DOMAIN=""
REACT_APP_DATABASE_URL=""
REACT_APP_PROJECT_ID=""
REACT_APP_STORAGE_BUCKET=""
REACT_APP_MESSAGING_SENDER_ID=""
REACT_APP_APP_ID=""
REACT_APP_MEASUREMENT_ID=""
```

## used dependencies

npm add firebase  
npm add dotenv  
npm add react-router-dom

## Firebase.js

IMPORT

```javascript
import React, { useContext } from "react";
import {
  firebaseApp,
  getIDToken,
  signInWithGoogle,
  signInWithFacebook,
  signInWithTwitter,
  signInWithGithub,
} from "../firebase/Firebase";
import { AuthContext } from "../firebase/FirebaseContext";
```

SIGN IN

```javascript
signInWithGoogle();
signInWithFacebook();
signInWithTwitter();
signInWithGithub();
```

SIGN OUT

```javascript
firebaseApp.auth().signOut();
```

GET ID TOKEN

```javascript
const currentUser = useContext(AuthContext);
var IDToken;
if (currentUser) {
  getIDToken().then(function (token) {
    IDToken = token;
  });
}
```

## FirebaseRoutes.js

IMPORT

```javascript
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthContextProvider } from "./firebase/FirebaseContext";
import { NeedLoggedInRoute, NeedLoggedOutRoute } from "./firebase/FirebasePrivateRoute";
import Account from "./router/Account";
import Login from "./router/Login";
```

NEED LOGGED IN / LOGGED OUT ROUTE

```javascript
<AuthContextProvider>
  <Router>
    <NeedLoggedInRoute exact path="/home" redirect="/login" component={Account} />
    <NeedLoggedOutRoute exact path="/login" redirect="/home" component={Account} />
  </Router>
</AuthContextProvider>
```

## FirebaseContext.js

IMPORT

```javascript
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthContextProvider } from "./firebase/FirebaseContext";
```

GIVE CONTEXT TO CHILD

```javascript
<AuthContextProvider>
  <Router>
    <Route />
  </Router>
</AuthContextProvider>
```

USE CONTEXT IN CHILD ROUTE

```javascript
import React, { useContext } from "react";
const currentUser = useContext(AuthContext);
```
