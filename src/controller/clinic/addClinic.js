/** @format */

import axios from "axios";

export default async function addClinic(
	name,
	phone,
	type,
	subtype,
	country,
	province,
	city,
	address
) {
	let newdata = JSON.stringify({
		name: name,
		phone: phone,
		type: type,
		subtype: subtype,
		country: country,
		province: province,
		city: city,
		address: address,
	});

	let config = {
		url: "http://localhost:5000/add_clinic",
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
