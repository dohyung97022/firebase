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

## firebase.js

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
