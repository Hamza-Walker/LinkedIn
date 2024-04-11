import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Login.css";
import { auth } from "../db/firebase";
import { login } from "../features/userSlice";
import { updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
		.then((userAuth) => {
			dispatch(login({
				email: userAuth.user.email,
				uid: userAuth.user.uid,
				displayName: userAuth.user.displayName,
				profileUrl: userAuth.user.photoURL
			}))
		}).catch(error => alert(error.message))
  };

  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // The user has been created successfully
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name,
          photoURL: profilePic,
        })
          .then(() => {
            dispatch(
              login({
                email: user.email,
                uid: user.uid,
                displayName: name,
                photoUrl: profilePic,
              }),
            );
          })
          .catch((error) => alert(error.message));
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <img
        src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
        alt=""
      />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="username (required)"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          type="text"
          placeholder=" Profile URL (optional)"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder=" Email (optional)"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};
