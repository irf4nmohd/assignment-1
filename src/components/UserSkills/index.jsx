import React from "react";

function UserSkills({ skills }) {
	let customStyle = [
		{
			backgroundColor: "#34495E",
			color: "#F4F6F6",
		},
		{
			backgroundColor: "#DC7633",
			color: "#17202A ",
		},
		{
			backgroundColor: "#1B4F72",
			color: "#F4F6F6",
		},
		{
			backgroundColor: "#6495ED",
			color: "#F4F6F6",
		},
		{
			backgroundColor: "#C0392B",
			color: "#F4F6F6",
		},
	];
	let skillsCollection = skills.map((obj, index) => {
		let colorPicker = customStyle[Math.floor(Math.random() * 5)];
		return (
			<div key={index} style={colorPicker} className="skills__element">
				{obj}
			</div>
		);
	});
	return <div className="skills">{skillsCollection}</div>;
}

export default UserSkills;
