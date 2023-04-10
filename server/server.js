/** @format */

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Router = require("./routes");

const app = express();
// Not used anymore for project upload and usage
// require("dotenv").config();

app.use(express.json());
app.use(cors());

const uri = "mongodb+srv://admin:yPZeikQsfKsDDzDZ@user-db.rogeokl.mongodb.net/";

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
