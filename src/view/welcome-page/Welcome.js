/** @format */

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Assets
import Copyright from "../assets/props/Copyrights.js";
import MedicalPhoto from "../assets/props/MedicalPhotoProp.js";
import RandomMessage from "../assets/props/RandomMessageProp.js";
import bsLogo from "../assets/images/Q.jpg";

const theme = createTheme();

// User information
const email = "julie1234_@gmail.com";
const clinic = "Panatella Dental";

export default function Welcome() {
	return (
		<ThemeProvider theme={theme}>
			<Grid container component="main" sx={{ height: "100vh" }}>
				<CssBaseline />
				<Grid
					item
					xs={false}
					sm={4}
					md={7}
					sx={{
						backgroundImage: MedicalPhoto,
						backgroundRepeat: "no-repeat",
						backgroundColor: (t) =>
							t.palette.mode === "light"
								? t.palette.grey[50]
								: t.palette.grey[900],
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					<RandomMessage></RandomMessage>
				</Grid>
				<Grid
					item
					xs={12}
					sm={8}
					md={5}
					elevation={6}
					margin="auto"
					square
				>
					<Box
						sx={{
							my: 8,
							mx: 4,
							display: "flex",
							flexDirection: "column",
							// FIXME: Align items can be removed for a flex-start justification
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
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Setup Account
						</Button>
						{/* TODO: Setup actual hosting site to test React Router. *
						Used temporary button for display. * Replace top button
						with button below.
						<Button
							component={Link}
							to="/registration"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Setup Account
						</Button> */}
					</Box>

					<Copyright sx={{ mt: 5, bottom: 0 }} />
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}
