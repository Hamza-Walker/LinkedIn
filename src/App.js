import React, { useEffect } from "react";
import "./App.css";
import { Header } from "./componants/header/Header";
import { Sidebar } from "./componants/sidebar/Sidebar";
import { Feed } from "./componants/feed/Feed";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { Login } from "./pages/Login";
import { auth } from "./db/firebase";
import { login, logout } from "./features/userSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          }),
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
           <widget />
        </div>
      )}
    </div>
  );
}

export default App;
