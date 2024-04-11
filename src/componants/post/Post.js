import React,{forwardRef} from "react";
import "./Post.css";
import { InputOption } from "../inputOption/InputOption";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import {
	ChatOutlined,
	FolderSharedOutlined,
	SendOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";

export const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
	return (
		<div ref={ref} className="post">
			<div className="post__header">
				<Avatar src={photoUrl} className="post__avatar">
					{name[0]}
				</Avatar>
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
				<InputOption Icon={FolderSharedOutlined} title="Share" color="gray" />
				<InputOption Icon={SendOutlined} title="Send" color="gray" />
			</div>
		</div>
	);
});
