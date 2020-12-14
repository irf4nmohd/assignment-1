import React from "react";
import ImageComponent from "../ImageComponent";

import altImgData from "../images/defaultProfile.jpg";

function Profile(props) {
	let { name, photo, designation, contact } = props.data?.bio;

	//grabbing the info about email of the user

	let userEmailObj = contact?.find((obj) => {
		return obj.type === "email";
	});

	return (
		<div className="profile">
			<section className="profile_container">
				<ImageComponent
					className="profile_container-photo"
					imgData={photo}
					altImgData={altImgData}
				/>
			</section>
			<div className="heading">
				<h1 className="heading_primary">
					<span className="heading_primary-start">
						{name?.firstName ?? null}
					</span>
					<span className="heading_primary-end">{name?.lastName ?? null}</span>
				</h1>
				<h3 className="heading_secondary">{designation ?? null}</h3>
				{userEmailObj ? (
					<button className="btn">
						send
						<span>
							<i className={`fas fa-envelope btn_icon`}></i>
						</span>
					</button>
				) : null}
			</div>
		</div>
	);
}

export default Profile;
