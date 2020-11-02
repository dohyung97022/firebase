import React from "react";
import {firebaseApp} from "../firebase/Firebase";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => firebaseApp.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;