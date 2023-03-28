/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SignInSide from "./view/sign-in-page/SignInSide";
import reportWebVitals from "./reportWebVitals";
import Welcome from "./view/welcome-page/Welcome"; // Page 1
import Registration from "./view/registration-page/Registration"; // Page 2
import PracticeDetails from "./view/registration-page/PracticeDetails"; // Page 3
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
