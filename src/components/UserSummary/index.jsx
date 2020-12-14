import React from "react";

function UserSummary({ userContent }) {
	return (
		<div className="user_content">
			<h4 className="user_content-heading">{userContent.heading ?? null}</h4>
			<p className="user_content-paragraph">{userContent.paragraph ?? null}</p>
		</div>
	);
}

export default UserSummary;
