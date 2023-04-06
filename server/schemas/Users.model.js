/** @format */

const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
	username: {
		type: String,
		unique: true,
		lowercase: true,
		required: true,
	},

	password: {
		type: String,
		required: true,
	},

	role: {
		type: String,
	},

	specialty: {
		type: String,
	},
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
