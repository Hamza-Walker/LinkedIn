import React from "react";
import "./Sidebar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export const Sidebar = () => {
	
	const recentItem = (topic) => (
		<div className="sidebar__recentItem">
			<span className="sidebar__hash">#</span>
			<p>{topic}</p>
		</div>
	)
	


	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<img
					src="https://www.kickstartcassiopeia.com/images/screenshot%202021-03-06%20at%2016.40.42.jpg"
					alt=""
				/>
				<AccountCircleIcon className="sidebar__avatar" />
				<h2>Hamza Walker</h2>
				<h3>Full Stack Developer</h3>
			</div>
			<div className="sidebar__stats">
				<div className="sidebar__stat">
					<p>Who viewed you</p>
					<p className="sidebar__statNumber">2,543</p>
				</div>
				<div className="sidebar__stat">
					<p>Views on post</p>
					<p className="sidebar__statNumber">2,448</p>
				</div>
			</div>
			<div className="sidebar__bottom">
				<p>Recent</p>
				{recentItem('reactjs')}
				{recentItem('programming')}
				{recentItem('softwareengineering')}
				{recentItem('design')}
				{recentItem('developer')}
			</div>
		</div>
	);
};
