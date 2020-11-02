import React, { useContext } from "react";
import { firebaseApp } from "../firebase/Firebase";
import { AuthContext } from "../firebase/FirebaseContext";

const Home = () => {
  const currentUser = useContext(AuthContext);
  console.log(currentUser);

  return (
    <>
      <h1>Home</h1>
      <button onClick={() => firebaseApp.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;
