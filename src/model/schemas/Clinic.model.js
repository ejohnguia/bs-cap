/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClinicSchema = new Schema({
	name: {
		type: String,
		unique: true,
		lowercase: true,
		required: true,
	},

	phone: {
		type: Number,
	},

	type: {
		type: String,
	},

	subtype: {
		type: String,
	},

	country: {
		type: String,
	},

	province: {
		type: String,
	},

	city: {
		type: String,
	},
});

module.exports = mongoose.model("Clinic", ClinicSchema);
