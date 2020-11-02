import React from "react";
import {
  firebaseApp,
  signInWithGoogle,
  signInWithFacebook,
  signInWithTwitter,
  signInWithGithub,
} from "../firebase/Firebase";

const Login = () => {
  return (
    <>
      <div className="App">
        <div className="login-buttons">
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
