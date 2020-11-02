import React, { useContext } from "react";
import { firebaseApp } from "../firebase/Firebase";
import { AuthContext } from "../firebase/FirebaseContext";

const Account = () => {
  const currentUser = useContext(AuthContext);
  console.log(currentUser);

  return (
    <>
      <h1>Account</h1>
      <button onClick={() => firebaseApp.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Account;
