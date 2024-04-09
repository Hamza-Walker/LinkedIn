import React from "react";
import "./HeaderOptions.css";

export const HeaderOptions = function({avatar, Icon, title}) {
	return (
		<div className="headerOption">
			{Icon && <Icon className="headerOption__icon" />}
			{avatar && <avatar className="headerOption__icon" src={avatar} />}
			<h3 className="headerOption__title">{title}</h3>
		</div>
	);
};
