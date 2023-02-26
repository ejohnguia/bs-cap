/** @format */

import React from "react";
import Typography from "@mui/material/Typography";

const messagesList = [
	{
		clinicType: "Dental Clinic",
		message: "Happy Teeth Happy Feet!",
	},
	{
		clinicType: "Children's Hospital",
		message: "We're here to give presents to all children.",
	},
];

export default class RandomMessage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: "",
			clinicType: "",
		};
	}

	newMessage() {
		let number = Math.floor(Math.random() * 2);
		let newmessage = messagesList[number].message;

		this.setState({ message: newmessage });

		let newClinicType = messagesList[number].clinicType;
		this.setState({ clinicType: newClinicType });
	}

	componentDidMount() {
		this.newMessage();
	}

	render() {
		return (
			<Typography
				variant="h1"
				component="h2"
				display="flex"
				align="center"
			>
				{this.state.message} {this.state.clinicType}
			</Typography>
		);
	}
}
