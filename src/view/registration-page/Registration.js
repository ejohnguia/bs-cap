/** @format */
// import brightsquidLogo from '../../img/brightsquid_logo.PNG';
import React, { useState, useEffect } from "react";
import "../../App.css";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import Copyright from "../assets/props/Copyrights.js";
import MedicalPhoto from "../assets/props/MedicalPhotoProp.js";

// For Step count
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import HorizontalLinearStepper from "../../stepper";

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";

// Backend
import addUser from "../../controller/user/addUser";

import PasswordStrengthBar from "react-password-strength-bar";
import customTheme from "../../style";
import SpecialtiesList from "../assets/props/data/SpecialtiesList";

// https://www.npmjs.com/package/check-password-strength
// https://www.npmjs.com/package/react-password-strength-bar

export default function Registration() {
	const navigate = useNavigate();
	const [photo, setPhoto] = useState(MedicalPhoto);
	const [username, setUsername] = useState("");
	// Creates states for fields
	// Create a state var to hold the password strength
	// const [passwordStrength, setPasswordStrength] = React.useState(0);
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [specialty, setSpecialty] = useState("");
	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	// Handles backend submission
	function handleSubmitForm() {
		if (password !== passwordConfirm) {
			alert("Passwords do not match!");
			return;
		}
		if (username === "") {
			alert("Please fill the username field");
			return;
		}
		if (password === "") {
			alert("Please fill the password field");
			return;
		}

		// TODO: Add new fields in the schema
		// if (addUser(username, password, specialty)) {
		if (addUser(username, password)) {
			alert("User created successfully");
			navigate("/registration/practice-details");
		} else {
			alert("Could not create account. Please try again");
		}

		console.log(username, ", ", password, ", ", passwordConfirm);
	}

	return (
		<ThemeProvider theme={customTheme}>
			<Grid
				container
				component="main"
				sx={{ height: "100%", width: "100%" }}
				marginLeft={4}
			>
				<CssBaseline />
				{/* TO-DO: Fix imaging dimensions to replicate figma mock-ups */}
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
					<Box
						sx={{
							my: 15,
							mx: 6,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						{/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
							{/* <LockOutlinedIcon /> */}
						{/* </Avatar> */}
						<Grid item xs={4} mt={4}>
							<img
								src={""}
								width={141.8}
								height={30.8}
								alt="brightsquid"
							/>
						</Grid>
						<Typography component="body" variant="h5">
							Welcome to Brightsquid!
						</Typography>
						<Box component="form" sx={{ mt: 1 }}>
							<Typography component={"bodyBS"}>
								{" "}
								Username{" "}
							</Typography>
							<TextField
								onChange={(e) => setUsername(e.target.value)}
								margin="normal"
								required
								fullWidth
								id="username"
								label="Username"
								name="username"
								autoFocus
							/>
							<Typography variant="body1">
								{" "}
								Create a Password{" "}
							</Typography>
							<OutlinedInput
								onChange={(e) => setPassword(e.target.value)}
								label="Password"
								fullWidth
								id="outlined-adornment-password"
								type={showPassword ? "text" : "password"}
								// value={inputValue}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={
												handleMouseDownPassword
											}
											edge="end"
										>
											{showPassword ? (
												<VisibilityOff />
											) : (
												<Visibility />
											)}
										</IconButton>
									</InputAdornment>
								}
							/>
							{/* Password meter */}
							<PasswordStrengthBar password={password} />
							<Typography variant="body1">
								{" "}
								Confirm Password{" "}
							</Typography>
							<OutlinedInput
								onChange={(e) => {
									setPasswordConfirm(e.target.value);
								}}
								label="Password"
								fullWidth
								id="outlined-adornment-password"
								type={showPassword ? "text" : "password"}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={
												handleMouseDownPassword
											}
											edge="end"
										>
											{showPassword ? (
												<VisibilityOff />
											) : (
												<Visibility />
											)}
										</IconButton>
									</InputAdornment>
								}
							/>
							{/* About you section*/}

							<Grid item xs={5}>
								<Typography variant="body1" mt={7}>
									{" "}
									<strong> About you </strong>
								</Typography>
							</Grid>
							<Grid container spacing={12}>
								<Grid item xs={5}>
									<Typography>Role</Typography>
									<RadioGroup
										row
										aria-labelledby="demo-row-radio-buttons-group-label"
										name="row-radio-buttons-group"
									>
										<FormControlLabel
											value="Clinician"
											control={<Radio />}
											label="Clinician"
										/>
										<FormControlLabel
											value="Staff"
											control={<Radio />}
											label="Staff"
										/>
									</RadioGroup>
								</Grid>

								<Grid item xs={5}>
									<Typography mb={2}> Specialty</Typography>
									<FormControl fullWidth>
										<InputLabel> Specialty </InputLabel>
										<Select
											id="specialty-select"
											label="Specialty"
										>
											{SpecialtiesList.map((person) => {
												let data = person.title
													.toLowerCase()
													.replace(/_/g, " ");
												return (
													<MenuItem
														value={data}
														on
														onClick={() => {
															setSpecialty(data);
														}}
													>
														{data}
													</MenuItem>
												);
											})}
										</Select>
									</FormControl>
								</Grid>
							</Grid>
							{/* TO-DO: fill with actual data */}
							{/* 
							<Grid item xs={5} mt={5}>
									
									<Typography  mb={2}>Title <strong className='asterisk' style={{color: "red"}}> * </strong></Typography>
									<FormControl fullWidth>
									
									<InputLabel> Title </InputLabel>
									<Select id="clinic-select" label="Clinic Type">
										<MenuItem value={0}>Dental</MenuItem>
										<MenuItem value={0}>Family</MenuItem>
										<MenuItem value={0}>Hospital</MenuItem>
										<MenuItem value={0}>Mental Health </MenuItem>
									</Select> 
									</FormControl>
									</Grid>*/}
							<Button
								onClick={handleSubmitForm}
								id="next-steps-btn"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2 }}
							>
								Next Steps
							</Button>

							<Grid container>
								<Grid item xs></Grid>
								<HorizontalLinearStepper>
									{" "}
								</HorizontalLinearStepper>
								<Grid item></Grid>
							</Grid>
						</Box>
					</Box>
					<Copyright sx={{ mt: 5 }} />
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}
