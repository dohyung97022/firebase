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

const Login = () => {
  const currentUser = useContext(AuthContext);
  var IDToken;
  if (currentUser) {
    getIDToken().then(function (token) {
      IDToken = token;
    });
  }
  return (
    <>
      <div className="App">
        <div className="login-buttons">
          <button
            className="login-provider-button"
            onClick={() => {
              console.log(IDToken);
            }}
          >
            <span> Get id token</span>
          </button>
          <button
            className="login-provider-button"
            onClick={() => {
              console.log(IDToken);
            }}
          >
            <span> Send id token</span>
          </button>
          <button
            className="login-provider-button"
            onClick={() => {
              signInWithGoogle();
            }}
          >
            <span> Continue with Google</span>
          </button>
          <button
            className="login-provider-button"
            onClick={() => {
              signInWithFacebook();
            }}
          >
            <span> Continue with Facebook</span>
          </button>
          <button
            className="login-provider-button"
            onClick={() => {
              signInWithTwitter();
            }}
          >
            <span> Continue with Twitter</span>
          </button>
          <button
            className="login-provider-button"
            onClick={() => {
              signInWithGithub();
            }}
          >
            <span> Continue with Github</span>
          </button>
        </div>
      </div>
      <button onClick={() => firebaseApp.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Login;
