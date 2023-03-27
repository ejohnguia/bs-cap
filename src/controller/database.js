/** @format */

const mongoose = require("mongoose");
require("dotenv").config();

mongoose
	.connect(process.env.DB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})

	.then(() => console.log("Database Connected Successfully"))
	.catch((err) => console.log(err));
