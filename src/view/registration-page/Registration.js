/** @format */
// import brightsquidLogo from '../../img/brightsquid_logo.PNG';
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PasswordStrengthBar from 'react-password-strength-bar';
import Copyright from "../assets/props/Copyrights.js";

import MedicalPhoto from "../assets/props/MedicalPhotoProp.js";

// For Step count
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import HorizontalLinearStepper from "../../stepper";
import setActiveStep from "../../stepper";

// import HorizontalLinearStepper from "../../stepper";
// import setActiveStep from "../../stepper";

import { stepperClasses } from "@mui/material";

const theme = createTheme();
// const { password } = this.state;
// <PasswordStrengthBar password={password} />
export default function Registration() {
	return (
		<ThemeProvider theme={theme}>
			<Grid container component="main" sx={{ height: "100%" , width: "100%"}} marginLeft={4}>
				<CssBaseline />
				{/* TO-DO: Fix imaging dimensions to replicate figma mock-ups */}
				<Grid
					item
					xs={false}
					sm={4}
					md={3}
					sx={{
						// width: "33%",
						backgroundImage: MedicalPhoto,
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
						<img src={""} width={141.8} height={30.8} alt="brightsquid"/>
						</Grid>
						<Typography component="h1" variant="h5">
							Welcome to Brightsquid!
						</Typography>
						<Box
							component="form"
							sx={{ mt: 1 }}
						>
							<Typography variant="body1"> Username </Typography>
							<TextField
								margin="normal"
								required
								fullWidth
								id="username"
								label="Username"
								name="username"
								// autoComplete="John"
								autoFocus
							/>
							{/* <Typography variant="body1"> Last Name </Typography>
							<TextField
								margin="normal"
								required
								fullWidth
								id="last_name"
								label="Last Name"
								name="last_name"
								// autoComplete="Doe"
								autoFocus */}
							{/* /> */}
							{/* <FormControlLabel
								control={
									<Checkbox
										value="remember"
										color="primary"
									/>
								}
								label="Remember me"
							/> */}
							<Typography variant="body1"> Create a Password </Typography>
							<TextField
								margin="normal"
								required
								fullWidth
								id="password"
								label="Password"
								name="password"
								// autoComplete="Doe"
								autoFocus
							/>
							{/* TODO: Password meter */}
							<Typography variant="body1"> PASSWORD METER PLACEHOLDER </Typography>
							<Typography variant="body1"> Confirm Password </Typography>
							<TextField
								margin="normal"
								required
								fullWidth
								id="confirm-password"
								label="Confirm Password"
								name="password"
								// autoComplete="Doe"
								autoFocus
							/>
							<Button
								id="next-steps-btn"
								component={Link}
								to="/registration/practice-details"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2 }}
							>
								Next Steps
							</Button>

							<Grid container>
								<Grid item xs>
									{/* <Link href="#" variant="body2">
										Forgot password?
									</Link> */}
								</Grid>
								<HorizontalLinearStepper> </HorizontalLinearStepper>
								<Grid item>
								</Grid>
							</Grid>
						</Box>
					</Box>
					<Copyright sx={{ mt: 5 }} />
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}
