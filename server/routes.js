/** @format */

const express = require("express");
const userModel = require("./schemas/Users.model");
const clinicModel = require("./schemas/Clinic.model");
const app = express();

// =================================
// ---------- USER ROUTES ----------
// =================================

// Adds new user into the db
app.post("/add_user", async (request, response) => {
	const user = new userModel(request.body);

	try {
		await user.save();
		response.send(user);
	} catch (error) {
		response.status(500).send(error);
	}
});

// Gets all users
app.get("/users", async (request, response) => {
	const users = await userModel.find({});

	try {
		response.send(users);
	} catch (error) {
		response.status(500).send(error);
	}
});

// =================================
// --------- CLINIC ROUTES ---------
// =================================

// Adds new clinic into the db
app.post("/add_clinic", async (request, response) => {
	const clinic = new clinicModel(request.body);

	try {
		await clinic.save();
		response.send(clinic);
	} catch (error) {
		response.status(500).send(error);
	}
});

// Gets all clinics
app.get("/clinics", async (request, response) => {
	const clinics = await clinicModel.find({});

	try {
		response.send(clinics);
	} catch (error) {
		response.status(500).send(error);
	}
});

module.exports = app;
