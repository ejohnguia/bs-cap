/** @format */

// For reference
// https://www.freecodecamp.org/news/deploying-a-mern-application-using-mongodb-atlas-to-heroku/

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();

require("./database");

// Parsing JSON data
app.use(bodyParser.json());
app.use(cors());

// API
const users = require("/api/users");
app.use("/api/users", users);

// Joining Build
app.use(express.static(path.join(__dirname, "../build")));
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../build"));
});

// Checking port
const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
