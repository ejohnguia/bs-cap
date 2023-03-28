/** @format */

import Clinic from "./Clinic.model";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
	email: {
		type: String,
		unique: true,
		lowercase: true,
		required: true,
	},

	password: {
		type: String,
		required: true,
	},

	// clinic: {
	// 	type: Clinic,
	// },
});

module.exports = mongoose.model("User", UserSchema, "Users");
