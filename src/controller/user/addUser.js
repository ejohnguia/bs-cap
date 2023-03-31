/** @format */

import axios from "axios";

export default async function addUser(username, password) {
	let newdata = JSON.stringify({
		username: username,
		password: password,
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
		console.error(error.response.data);
		return false;
	}
}
