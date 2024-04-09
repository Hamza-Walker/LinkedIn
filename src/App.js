import React from "react";
import "./App.css";
import { Header } from "./componants/header/Header";
import { Sidebar } from "./componants/sidebar/Sidebar";
import { Feed } from "./componants/feed/Feed";

function App() {
	return (
		<div className="app">
			<Header />
			{/* <App Body /> */}
			<div className="app__body">
				<Sidebar />
				<Feed />
				{/* <widget /> */}
			</div>
		</div>
			);
}

export default App;
