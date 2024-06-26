import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
export const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
	<FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
			{newsArticle("LinkedIn is back", "Top news - 9099 readers")}
			{newsArticle("Coronavirus is a hoax: UK updates", "Top news - 886 readers")}
			{newsArticle("Tesla hits new highs", "Cars & auto - 300 readers")}
			{newsArticle("Bitcoin breaks $70k", "Crypto - 3000 readers")}
		</div>
  );
};
