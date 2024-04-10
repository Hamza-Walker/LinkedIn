import React,{ useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import { InputOption } from "../inputOption/InputOption";
import { Post } from "../post/Post";

export const Feed = () => {
	const [posts, setPosts] = React.useState([]);



	const sendPost = (e) => {
		e.preventDefault();

	}
	return (
		<div className="feed">
			<div className="feed__inputContainer">
				<div className="feed__input">
					<CreateIcon />
					<form>
						<input type="text" />
						<button onClick={sendPost}>Send</button>
					</form>
				</div>
				<div className="feed__inputOptions">
					<InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
					<InputOption Icon={SubscriptionsIcon} title="Video" color="#7FC15E" />
					<InputOption Icon={EventNoteIcon} title="Event" color="#E7A33E" />
					<InputOption Icon={CalendarViewDayIcon} title="Write article" color="#F5987E" />
				</div>
			</div>
			{posts.map((post) => (
				<Post />

			))}
			{/* Feed */}
			<Post name="Hamza Walker" description="Software Engineer" message="This is a message" />
		</div>
	);
};
