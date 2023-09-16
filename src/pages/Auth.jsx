import React from "react";
import { auth, googleProvider } from "../config/firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   this is the function that is called when signing in
  //   it sets the username and password equal to the sign-in
  //   NOTE: this might be helpful for setting other variables equal to each other
  const SignIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  //   sign in with Google
  const SignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log(err);
    }
  };

  //   sign out
  const SignOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-800">
      <h1 className="text-4xl">Welcome to The Network</h1>
      <div className="m-10 flex flex-col items-center justify-center gap-5 border-4 border-red-500 rounded-lg p-20">
        <h2>Sign In</h2>
        <input
          type="text"
          placeholder="Enter Email"
          // NOTE: this is how you assign the contents of an input into a variable
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          // NOTE: this is how you assign the contents of an input into a variable
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link onClick={SignIn} to="/preferences">
          Enter
        </Link>
        <button onClick={SignInWithGoogle}>Sign In With Google</button>
        <button onClick={SignOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default Auth;
