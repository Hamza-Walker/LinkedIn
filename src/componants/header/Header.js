import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from '@mui/icons-material/Group';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { HeaderOptions } from "../headerOptions/HeaderOptions";

export const Header = () => {
	return (
		<div className="header">

			<div className="header__left">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/LinkedIn_2021.svg/400px-LinkedIn_2021.svg.png"
					alt="logo"
				/>
				<div className="header__search">
					<SearchIcon />
					<input placeholder="Search" type="text" />
				</div>
			</div>
			<div className="header__right">
				<HeaderOptions Icon={HomeIcon}  title="Home" />
				<HeaderOptions Icon={GroupIcon} title="Network" />
				<HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
				<HeaderOptions Icon={MessageIcon} title="Messaging" />
				<HeaderOptions Icon={NotificationsIcon} title="Notifications" />
			</div>
		</div>
	);
};
