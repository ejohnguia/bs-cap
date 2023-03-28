/** @format */

import { Routes, Route } from "react-router-dom";

import Welcome from "./view/welcome-page/Welcome";
import Registration from "./view/registration-page/Registration";
import PracticeDetails from "./view/registration-page/PracticeDetails";
import SignInSide from "./view/sign-in-page/SignInSide";
// TODO: Create error page
// import Error from "./view/error-page/Error";

import "./App.css";

function App() {
	return (
		<Routes>
			<Route exact path="/" element={<Welcome />} />
			<Route exact path="/registration" element={<Registration />} />
			<Route exact path="/registration/practice-details" element={<PracticeDetails />}/>
			<Route exact path="/sign-in" element={<SignInSide />} />
			{/* <Route path="*" element={<Error />} /> */}
		</Routes>
	);
}

export default App;
