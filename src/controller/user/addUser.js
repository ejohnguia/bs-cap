/** @format */

import axios from "axios";

export default function addUser(username, password) {
	const data = `{\r\n    "username": "${username}",\r\n    "password": "${password}"\r\n}`;

	const config = {
		method: "post",
		maxBodyLength: Infinity,
		url: "http://localhost:5000/add_user",
		headers: {},
		data: data,
	};

	axios
		.request(config)
		.then(() => {
			return true;
		})
		.catch(() => {
			return false;
		});
}
