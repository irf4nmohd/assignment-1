import React from "react";

function UserContact({ contact }) {
	let UserContacts = contact.map((obj, index) => {
		return (
			<div key={index} className="contact">
				<div className="contact_icon">
					<i className={`fas ${obj.iconName}`}></i>
				</div>
				<div className="contact_id">{obj.value}</div>
			</div>
		);
	});
	return (
		<>
			<div className="contacts_container">{UserContacts}</div>
		</>
	);
}

export default UserContact;
