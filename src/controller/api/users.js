/** @format */

const express = require("express");
const router = express.Router();

const User = require("../../model/schemas/Users.model");

// Gets all users
router.get("/", (req, res) => {
	User.find()

		.then((users) => res.json(users))
		.catch((err) => console.log(err));
});

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
