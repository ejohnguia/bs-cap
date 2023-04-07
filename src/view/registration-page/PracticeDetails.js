/** @format */

// import brightsquidLogo from '../../img/brightsquid_logo.PNG';

import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import FormControl from "@mui/material/FormControl";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

import HorizontalLinearStepper from "../../stepper";
import MedicalPhoto from "../assets/props/MedicalPhotoProp.js";
import Copyright from "../assets/props/Copyrights.js";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

import { useEffect, useState } from "react";
import customTheme from "../../style";
import countries from "countrycitystatejson";
import { OrgSubType } from "../assets/props/OrgSubTypeProp";

// Backend
import addClinic from "../../controller/clinic/addClinic";

import Autocomplete from "@mui/material/Autocomplete";

export default function PracticeDetails() {
	const [photo, setPhoto] = useState(MedicalPhoto);
	const [phoneNumber, setPhoneNumber] = useState(false);
	// TODO: Consolidate orgType and formState
	const [orgType, setOrgType] = useState("");
	const [orgSubType, setOrgSubType] = useState("");
	const [formState, setFormState] = useState({
		practiceName: "",
		clinicType: "",
		clinicSubType: "",
		city: "",
		address: "",
	});

	const [selectedCountry, setSelectedCountry] = useState("Canada");
	const [selectedProvince, setSelectedProvince] = useState("");
	const [selectedShortName, setSelectedShortName] = useState("CA");

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormState((prevState) => ({ ...prevState, [name]: value }));
	};

	// function getSelectedCountry() {
	// 	return selectedCountry;
	// }

	const isFormFilled = () => {
		console.log(selectedProvince, selectedCountry);
		return (
			formState.practiceName !== "" &&
			formState.clinicType !== "" &&
			formState.clinicSubType !== "" &&
			selectedCountry !== "" &&
			selectedProvince !== ""
		);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (isFormFilled()) {
			console.log("Form submitted!", formState);
			addClinic(
				formState.practiceName,
				phoneNumber,
				orgType,
				orgSubType,
				selectedCountry,
				selectedProvince,
				formState.city,
				formState.address
			);
			console.log(
				"Variables passed into addClinic function:",
				formState.practiceName,
				phoneNumber,
				orgType,
				orgSubType,
				selectedCountry,
				selectedProvince,
				formState.city,
				formState.address
			);
		} else {
			console.log("Please fill out all fields.");
		}
	};

	console.log(selectedCountry);
	const handleCountryChange = (event) => {
		setSelectedCountry(event.target.value);

		console.log(
			countries
				.getStatesByShort(selectedShortName)
				.map((state) => console.log(state))
		);

		setSelectedProvince("");
	};

	const handleProvinceChange = (event) => {
		setSelectedProvince(event.target.value);
	};

	const handleMenuItemClick = (event, key) => {
		console.log(key);
		setSelectedShortName(key);
	};

	return (
		<form onSubmit={handleSubmit}>
			<ThemeProvider theme={customTheme}>
				<Grid container component="main" sx={{ height: "100vh" }}>
					<CssBaseline />
					<Grid
						item
						xs={false}
						sm={4}
						md={3}
						sx={{
							backgroundImage: photo,
							backgroundRepeat: "no-repeat",
							backgroundColor: (t) =>
								t.palette.mode === "light"
									? t.palette.grey[50]
									: t.palette.grey[900],
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					/>
					<Grid
						item
						xs={12}
						sm={8}
						md={9}
						component={Paper}
						elevation={6}
						square
					>
						{/* Right side*/}
						<Box
							sx={{
								my: 8,
								mx: 4,
								display: "flex",
								flexDirection: "column",
								alignItems: "left",
							}}
						>
							<Box sx={{ mt: 1 }}>
								<Grid container spacing={12}>
									<Grid item xs={3}>
										<Typography variant="h5">
											Practice Details
										</Typography>
									</Grid>
									<Grid item xs={9}>
										LOGO
										{/* <img src={brightsquidLogo} width={141.8} height={30.8} alt="brightsquid"/> */}
									</Grid>
								</Grid>

								{/* Practice Name and Practice Phone */}
								<Grid container spacing={12}>
									<Grid item xs={2}>
										<Typography variant="body1" mt={5}>
											<strong> Practice Details</strong>
										</Typography>
									</Grid>

									<Grid item xs={5} mt={7}>
										<Typography variant="body1">
											{" "}
											Practice Name{" "}
											<strong
												className="asterisk"
												style={{ color: "red" }}
											>
												{" "}
												*{" "}
											</strong>
										</Typography>
										<TextField
											margin="normal"
											fullWidth
											id="practice_name"
											label="Practice Name"
											name="practiceName"
											onChange={handleInputChange}
										/>
									</Grid>
									<Grid item xs={5} mt={7}>
										<Typography variant="body1">
											{" "}
											Practice Phone{" "}
										</Typography>
										<PhoneInput
											id="phone_num"
											containerStyle={{ margin: "10px" }}
											fullWidth
											// fix me, label appear, similar to text fields
											specialLabel={""}
											country={"ca"}
											inputProps={{ shrink: "true" }}
											disableDropdown={true}
											value={phoneNumber}
											onChange={setPhoneNumber}
										/>
									</Grid>
								</Grid>

								{/* Clinic Type and Clinic sub type */}
								<Grid container spacing={12}>
									<Grid item xs={2}>
										{/* Empty space to align*/}
									</Grid>
									<Grid item xs={5} mt={5}>
										<Typography mb={2}>
											Clinic Type
											<strong
												className="asterisk"
												style={{ color: "red" }}
											>
												{" "}
												*{" "}
											</strong>
										</Typography>
										<FormControl fullWidth>
											<InputLabel>Clinic Type</InputLabel>
											<Select
												name="clinicType"
												id="clinic-select"
												label="Clinic Type"
												onChange={handleInputChange}
											>
												{OrgSubType.getOrg().map(
													(org) => {
														return (
															<MenuItem
																id={org}
																value={org}
																onClick={() => {
																	setOrgType(
																		org
																	);
																}}
															>
																{org}
															</MenuItem>
														);
													}
												)}
											</Select>
										</FormControl>
									</Grid>
									<Grid item xs={5} mt={5}>
										<Typography mb={2}>
											Clinic Subtype{" "}
											<strong
												className="asterisk"
												style={{ color: "red" }}
											>
												{" "}
												*{" "}
											</strong>
										</Typography>
										<FormControl fullWidth>
											<InputLabel>
												{" "}
												Clinic Subtype{" "}
											</InputLabel>
											<Select
												name="clinicSubType"
												id="clinicsubtype-select"
												label="Clinic Subtype"
												onChange={handleInputChange}
											>
												{OrgSubType.getSubTypeByOrg(
													orgType
												).map((subType) => {
													return (
														<MenuItem
															id={subType}
															value={subType}
															onClick={() => {
																setOrgSubType(
																	subType
																);
															}}
														>
															{subType}
														</MenuItem>
													);
												})}
											</Select>
										</FormControl>
									</Grid>
								</Grid>

								{/* PRACTICE ADDRESS: Country, State/province, City and address*/}
								<Grid container spacing={12}>
									<Grid item xs={2}>
										<Typography variant="body1" mt={7}>
											{" "}
											<strong>
												{" "}
												Practice Address{" "}
											</strong>{" "}
										</Typography>
									</Grid>

									<Grid item xs={5} mt={5}>
										<Typography mb={2}>
											Country
											<strong
												className="asterisk"
												style={{ color: "red" }}
											>
												{" "}
												*{" "}
											</strong>
										</Typography>
										<FormControl fullWidth>
											<Select
												name="country"
												labelId="country-label"
												id="country-select"
												value={selectedCountry}
												onChange={handleCountryChange}
											>
												{countries
													.getCountries()
													.map((country) => (
														<MenuItem
															key={
																country.shortName
															}
															onClick={(event) =>
																handleMenuItemClick(
																	event,
																	country.shortName
																)
															}
															value={country.name}
														>
															{country.name}
														</MenuItem>
													))}
											</Select>
										</FormControl>
									</Grid>

									<Grid item xs={5}>
										<Typography mb={2} mt={5}>
											Province
											<strong
												className="asterisk"
												style={{ color: "red" }}
											>
												{" "}
												*{" "}
											</strong>
										</Typography>
										{selectedCountry && (
											<FormControl fullWidth>
												<InputLabel>
													{" "}
													State/Province{" "}
												</InputLabel>
												<Select
													name="province"
													labelId="province-label"
													id="province-select"
													value={selectedProvince}
													label="Province/State"
													onChange={
														handleProvinceChange
													}
												>
													{countries
														.getStatesByShort(
															selectedShortName
														)
														.map((state) => (
															<MenuItem
																id={state}
																key={
																	selectedShortName
																}
																value={state}
															>
																{state}
															</MenuItem>
														))}
												</Select>
											</FormControl>
										)}
									</Grid>
								</Grid>

								<Grid container spacing={12}>
									<Grid item xs={2} />{" "}
									{/* Empty grid item to align the City dropdown*/}
									<Grid item xs={5} mt={5}>
										<Typography>City</Typography>
										<TextField
											margin="normal"
											fullWidth
											id="city_name"
											label="City"
											name="city"
											onChange={handleInputChange}
										/>
									</Grid>
									<Grid item xs={5} mt={5}>
										<Typography>Address</Typography>
										<TextField
											margin="normal"
											fullWidth
											id="address"
											label="Address"
											name="address"
											onChange={handleInputChange}
										/>
									</Grid>
								</Grid>

								{/* Center the stepper */}
								<Grid
									container
									spacing={10}
									alignItems="center"
									justifyContent="center"
								>
									<Grid item xs={10} mt={5}>
										<HorizontalLinearStepper>
											{" "}
										</HorizontalLinearStepper>
									</Grid>
								</Grid>

								{/* Back and next buttons */}
								<Grid container spacing={12}>
									<Grid item xs={10} mt={5}>
										<Button
											id="back-btn"
											variant="contained"
											component={Link}
											to="/registration"
										>
											Back
										</Button>
									</Grid>
									<Grid item xs={2} mt={5}>
										{/* Need to check fields if form is complete */}
										<Button
											id="next-btn"
											variant="contained"
											disabled={!isFormFilled()}
											color={
												isFormFilled()
													? "primary"
													: "inherit"
											}
											onClick={handleSubmit}
										>
											Next
										</Button>
									</Grid>
								</Grid>
							</Box>
						</Box>
						<Copyright sx={{ mt: 5 }} />
					</Grid>
				</Grid>
			</ThemeProvider>
		</form>
	);
}
