import React, { useContext } from "react";
import { firebaseApp, getIDToken } from "../firebase/Firebase";
import { AuthContext } from "../firebase/FirebaseContext";
const Home = () => {
  const currentUser = useContext(AuthContext);
  var IDToken;
  if (currentUser) {
    getIDToken().then(function (token) {
      IDToken = token;
    });
  }
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => firebaseApp.auth().signOut()}>Sign out</button>
      <button onClick={() => {console.log(IDToken);}}>Get id token</button>
    </>
  );
};

export default Home;
