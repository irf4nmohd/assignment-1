import React from "react";
import ImageComponent from "../ImageComponent";
import UserProfile from "../UserProfile";
import UserContact from "../UserContact";
import UserAnalyticsInfo from "../UserAnalyticsInfo";
import UserSkills from "../UserSkills";
import UserSummary from "../UserSummary";

//default img
import altImgData from "../images/defaultBg.jpg";

function PageWrapper(props) {
	//destructuring the json from props

	let Data = props.data;
	let { skills, userContent, info, bio } = props.data;
	let { contact, backgroundImg } = bio;

	return (
		<>
			<section className="bg">
				<ImageComponent
					imgData={backgroundImg}
					className="bg_img"
					altImgData={altImgData}
				/>
			</section>
			<div className="container">
				<div className="container_user-bio">
					<UserProfile data={Data} />
					{contact ? <UserContact contact={contact} /> : null}
				</div>
				<div className="container_user-info">
					<UserAnalyticsInfo info={info} />
					{skills ? <UserSkills skills={skills} /> : null}
					{userContent ? <UserSummary userContent={userContent} /> : null}
				</div>
			</div>
		</>
	);
}

export default PageWrapper;
