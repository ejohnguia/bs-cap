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

export default function Welcome() {
	const theme = useTheme();
	const [photo] = useState(MedicalPhoto);
	const isScreenSmall = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<ThemeProvider theme={customTheme}>
			<Grid container component="main" sx={{ height: "100vh" }}>
				<CssBaseline />
				<Grid
					item
					xs={false}
					sm={false}
					md={7}
					sx={{
						backgroundImage: photo,
						backgroundRepeat: "no-repeat",
						backgroundColor: (t) =>
							t.palette.mode === "light"
								? t.palette.grey[50]
								: t.palette.grey[900],
						backgroundSize: "cover",
						backgroundPosition: "center",
						position: "relative",
					}}
				>
					{!isScreenSmall && (
						<Box
							sx={{
								mt: 20,
								ml: 4,
								p: 2,
							}}
						>
							<RandomMessage />
						</Box>
					)}
				</Grid>
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
							<Typography component="h1" variant="h4">
								Brightsquid
							</Typography>
						</Stack>
						<Stack
							direction="column"
							justifyContent="center"
							alignItems="center"
							spacing={3}
						>
							<Typography variant="h5" align="center">
								Welcome {email}!
							</Typography>
							<Typography variant="h5" align="center">
								You've been invited by:
							</Typography>
							<Typography>Clinic: {clinic}</Typography>
						</Stack>

						<Button
							id="setup-btn"
							component={Link}
							to="/registration"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Setup Account
						</Button>
					</Box>
					<Grid marginLeft={4} marginRight={4}>
						<HorizontalLinearStepper> </HorizontalLinearStepper>
					</Grid>
					<Copyright sx={{ mt: 5, bottom: 0 }} />
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}
