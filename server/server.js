/** @format */

const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes");

const app = express();
require("dotenv").config();

app.use(express.json());

const uri = process.env.DB_URI;

mongoose.connect(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
	console.log("Database connected successfully");
});

app.use(Router);
const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
