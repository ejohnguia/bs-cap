/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	Avatar,
	Box,
	Button,
	CssBaseline,
	Grid,
	useTheme,
	useMediaQuery,
	ThemeProvider,
	Typography,
	Stack,
} from "@mui/material";

// Assets
import Copyright from "../assets/props/Copyrights.js";
import MedicalPhoto from "../assets/props/MedicalPhotoProp.js";
import RandomMessage from "../assets/props/RandomMessageProp.js";
import bsLogo from "../assets/images/Q.jpg";

import HorizontalLinearStepper from "../../stepper";
import customTheme from "../../style";

// User information
const email = "julie1234_@gmail.com";
const clinic = "Panatella Dental";

export default function End() {
	const theme = useTheme();
	const [photo] = useState(MedicalPhoto);
	const isScreenSmall = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<ThemeProvider theme={customTheme}>
			<Grid container component="main" sx={{ height: "100vh" }}>
				<CssBaseline />
				<Grid item xs={12} sm={8} md={5} elevation={6} margin="auto">
					<Box
						sx={{
							my: 8,
							mx: 4,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							direction: "column",
							justifyContent: "center",
						}}
					>
						<Stack
							direction="row"
							justifyContent="flex-start"
							spacing={2}
						>
							<Avatar alt="Brightsquid Logo" src={bsLogo} />
						</Stack>
						<Stack
							direction="column"
							justifyContent="center"
							alignItems="center"
							spacing={3}
						>
							<Typography component="h1" variant="h4" align="center">
								Welcome to Brightsquid!
							</Typography>
							<Typography variant="h5" align="center">
								To Access your Account Click on the "Login" button below.
							</Typography>
						</Stack>

						<Button
							id="login-btn"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Login
						</Button>
					</Box>
					<Copyright sx={{ mt: 5, bottom: 0 }} />
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}
