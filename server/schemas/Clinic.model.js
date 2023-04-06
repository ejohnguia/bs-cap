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
		required: true,
	},

	subtype: {
		type: String,
		required: true,
	},

	country: {
		type: String,
		required: true,
	},

	province: {
		type: String,
		required: true,
	},

	city: {
		type: String,
	},

	address: {
		type: String,
	},
});

module.exports = mongoose.model("Clinic", ClinicSchema);
