import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { HeaderOptions } from "../headerOptions/HeaderOptions";
import { useDispatch } from "react-redux";
import { auth } from "../../db/firebase";
import { logout } from "../../features/userSlice";
export const Header = () => {
	const dispatch = useDispatch();
	const logoutOfApp = () => {
		dispatch(logout());
		auth.signOut();
	};
	return (
		<div className="header">
			<div className="header__left">
				<img
					src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
					alt="logo"
				/>
				<div className="header__search">
					<SearchIcon />
					<input placeholder="Search" type="text" />
				</div>
			</div>
			<div className="header__right">
				<HeaderOptions Icon={HomeIcon} title="Home" />
				<HeaderOptions Icon={GroupIcon} title="Network" />
				<HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
				<HeaderOptions Icon={MessageIcon} title="Messaging" />
				<HeaderOptions Icon={NotificationsIcon} title="Notifications" />
				<HeaderOptions avatar={true} title="me" onClick={logoutOfApp} />
			</div>
		</div>
	);
};
