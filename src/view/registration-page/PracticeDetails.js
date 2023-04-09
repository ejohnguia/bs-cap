/** @format */

import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";

import FormControl from "@mui/material/FormControl";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

import HorizontalLinearStepper from "../../stepper";
import MedicalPhoto from "../assets/props/MedicalPhotoProp.js";
import Copyright from "../assets/props/Copyrights.js";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import customTheme from "../../style";
import countries from "countrycitystatejson";
import { OrgSubType } from "../assets/props/OrgSubTypeProp";

// Backend
import addClinic from "../../controller/clinic/addClinic";

export default function PracticeDetails() {
	const navigate = useNavigate();
	const [photo] = useState(MedicalPhoto);
	const [phoneNumber, setPhoneNumber] = useState(false);
	const [formState, setFormState] = useState({
		practiceName: "",
		orgType: "",
		orgSubType: "",
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

	const isFormFilled = () => {
		return (
			formState.practiceName !== "" &&
			formState.orgType !== "" &&
			formState.orgSubType !== "" &&
			selectedCountry !== "" &&
			selectedProvince !== ""
		);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (isFormFilled()) {
			alert("Form submitted!", formState);
			addClinic(
				formState.practiceName,
				phoneNumber,
				formState.orgType,
				formState.orgSubType,
				selectedCountry,
				selectedProvince,
				formState.city,
				formState.address
			);
			navigate("/registration/practice-details/end");
		} else {
			alert("Please fill out all fields.");
		}
	};

	const handleCountryChange = (event) => {
		setSelectedCountry(event.target.value);
		setSelectedProvince("");
	};

	const handleProvinceChange = (event) => {
		setSelectedProvince(event.target.value);
	};

	const handleMenuItemClick = (event, key) => {
		setSelectedShortName(key);
	};

	return (
		<form onSubmit={handleSubmit}>
			<ThemeProvider theme={customTheme}>

			<Grid
				container
				component="main"
			>
				
					<CssBaseline />

					<Grid
						item
						xs={false}
						sm={false}
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
							<Box sx={{ mt: 1 }} component="form">
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
								<Grid container spacing={2}>
									<Grid item xs={12} >
										<Typography variant="body1" mt={5}>
											<strong> Practice Details</strong>
										</Typography>
									</Grid>
							
									{/* Practice Name and Practice Phone */}
									<Grid item xs={12} sm={6} >
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
											<TextField style={{ width: '50%' }}
												margin="normal"
												fullWidth
												id="practice_name"
												label="Practice Name"
												name="practiceName"
												onChange={handleInputChange}
											/>								</Grid>
									<Grid item xs={12} sm={6} >
									<Typography variant="body1">
												{" "}
												Practice Phone{" "}
											</Typography>
											<PhoneInput 
											
												id="phone_num"
												containerStyle={{ margin: "10px" }}
												fullWidth
												inputStyle={{ width: '50%' }}
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
								<Grid container spacing={2}>
									<Grid item xs={12} sm={6}>
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
												name="orgType"
												id="orgType-select"
												label="Clinic Type"
												onChange={handleInputChange}
											>
												{OrgSubType.getOrg().map(
													(org) => {
														return (
															<MenuItem
																id={org}
																value={org}
																onClick={
																	handleInputChange
																}
															>
																{org}
															</MenuItem>
														);
													}
												)}
											</Select>
										</FormControl>
										
									</Grid>
									<Grid item xs={12} sm={6}>
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
												name="orgSubType"
												id="orgSubType-select"
												label="Clinic Subtype"
												onChange={handleInputChange}
											>
												{OrgSubType.getSubTypeByOrg(
													formState.orgType
												).map((subType) => {
													return (
														<MenuItem
															id={subType}
															value={subType}
															onClick={
																handleInputChange
															}
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
								<Grid container spacing={2}>
								<Grid item xs={12}>
									<Typography variant="body1" mt={5}>
											{" "}
											<strong>
												{" "}
												Practice Address{" "}
											</strong>{" "}
									</Typography>
								</Grid>
								<Grid item xs={12} sm={6}>
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
								<Grid item xs={12} sm={6}>
								<Typography mb={2}>
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
								<Grid container spacing={2}>
									<Grid item xs={12} sm={6}>
									<Typography mt={3}>City</Typography>
										<TextField
											margin="normal"
											fullWidth
											id="city_name"
											label="City"
											name="city"
											onChange={handleInputChange}
										/>
									</Grid>
									<Grid item xs={12} sm={6}>
										<Typography mt={3}>Address</Typography>
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
									spacing={2}
									alignItems="center"
									justifyContent="center"
								>
									<Grid item xs={12} mt={5}>
										<HorizontalLinearStepper>
											{" "}
										</HorizontalLinearStepper>
									</Grid>
								</Grid>		
							
								{/* Back and next buttons */}
								<Grid container spacing={2} >
									<Grid item xs={12} sm={6} mt={3}>
										<Button
											id="back-btn"
											variant="contained"
											component={Link}
											to="/registration">
											Back
										</Button>
									</Grid>
									<Grid item xs={12} sm={6} mt={3} >
										{/* Need to check fields if form is complete */}
										<Button
											id="next-btn"
											variant="contained"
											component={Link}
											to="/registration/practice-details/end"
											disabled={!isFormFilled()}
											color={
												isFormFilled()
													? "primary"
													: "inherit"
											}
											onClick={handleSubmit}>	
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
