/** @format */

const express = require("express");
const router = express.Router();

const User = require("../schemas/Users.model");

// Adds new user into the db
router.post("/", (req, res) => {
	const { username, password } = req.body;

	const newUser = new User({
		username: username,
		password: password,
	});

	newUser
		.save()

		.then(() =>
			res.json({
				message: "Created user successfully",
			})
		)

		.catch((err) =>
			res.status(400).json({
				error: err,
				message: "Error creating user",
			})
		);
});

module.exports = router;
