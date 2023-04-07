/** @format */

import axios from "axios";

export default async function addUser(username, password, role, specialty) {
	let newdata = JSON.stringify({
		username: username,
		password: password,
		role: role,
		specialty: specialty,
	});

	let config = {
		url: "http://localhost:5000/add_user",
		data: newdata,
		header: { "Content-Type": "application/json" },
	};

	try {
		axios.post(config.url, config.data, {
			headers: config.header,
		});
		return true;
	} catch (error) {
		return false;
	}
}
