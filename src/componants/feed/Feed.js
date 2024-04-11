import React, { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import { InputOption } from "../inputOption/InputOption";
import { Post } from "../post/Post";
import { db } from "../../db/firebase";
import { serverTimestamp } from "firebase/firestore";
import { collection, getDocs, query, orderBy, onSnapshot, addDoc } from "firebase/firestore";

export const Feed = () => {
	const [input, setInput] = useState("");
	const [posts, setPosts] = React.useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
			const querySnapshot = await getDocs(q);
			setPosts(
				querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })),
			);
		};

		fetchPosts();
		const intervalId = setInterval(fetchPosts, 5000); // Fetch updates every 5 seconds

		return () => clearInterval(intervalId); // Cleanup on component unmount
	}, []);

	const sendPost = (e) => {
		e.preventDefault();
		addDoc(collection(db, "posts"), {
			name: "Hamza Walker",
			description: "This is a test",
			message: input,
			photoUrl: "",
			timestamp: serverTimestamp(),
		});

		setInput("");
	};
	return (
		<div className="feed">
			<div className="feed__inputContainer">
				<div className="feed__input">
					<CreateIcon />
					<form>
						<input
							value={input}
							onChange={(e) => setInput(e.target.value)}
							type="text"
						/>
						<button onClick={sendPost}>Send</button>
					</form>
				</div>
				<div className="feed__inputOptions">
					<InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
					<InputOption Icon={SubscriptionsIcon} title="Video" color="#7FC15E" />
					<InputOption Icon={EventNoteIcon} title="Event" color="#E7A33E" />
					<InputOption
						Icon={CalendarViewDayIcon}
						title="Write article"
						color="#F5987E"
					/>
				</div>
			</div>
			{posts.map(({ id, data: { name, description, message, photoUrl } }) => (
				<Post
					key={id}
					name={name}
					description={description}
					message={message}
					photoUrl={photoUrl}
				/>
			))}
			{/* Feed */}
		</div>
	);
};
