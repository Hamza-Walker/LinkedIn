import React from "react";
import "./App.css";
import { Header } from "./componants/header/Header";
import { Sidebar } from "./componants/sidebar/Sidebar";
import { Feed } from "./componants/feed/Feed";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { Login } from "./pages/Login";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          {/* <widget /> */}
        </div>
      )}
    </div>
  );
}

export default App;
