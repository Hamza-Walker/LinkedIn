import React from "react";
import "./Post.css";
import { InputOption } from "../inputOption/InputOption";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import {
	AccountCircle,
	ChatOutlined,
	FolderSharedOutlined,
	SendOutlined,
} from "@mui/icons-material";

export const Post = ({ name, description, message, photoUrl }) => {
	return (
		<div className="post">
			<div className="post__header">
				<AccountCircle className="post__avatar" />
				<div className="post__info">
					<h2>{name}</h2>
					<p>{description}</p>
				</div>
			</div>
			<div className="post__body">
				<p>{message}</p>
			</div>
			<div className="post__buttons">
				<InputOption Icon={ThumbUpAltIcon} title="Like" color="gray" />
				<InputOption Icon={ChatOutlined} title="Comment" color="gray" />
				<InputOption
					Icon={FolderSharedOutlined}
					title="Share"
					color="gray"
				/>
				<InputOption Icon={SendOutlined} title="Send" color="gray" />
			</div>
		</div>
	);
};
