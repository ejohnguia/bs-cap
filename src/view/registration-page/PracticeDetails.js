/** @format */

import brightsquidLogo from '../../img/brightsquid_logo.PNG';

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

import HorizontalLinearStepper from "../../stepper";
import setActiveStep from "../../stepper";

import { stepperClasses } from "@mui/material";
function Copyright(props) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{"Copyright © "}
			<Link color="inherit" href="https://mui.com/">
				Brightsquid
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const theme = createTheme();

export default function PracticeDetails() {
	// TO-DO: connect to previous page
	const handleBack = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		// console.log({
		// 	email: data.get("email"),
		// 	password: data.get("password"),
		// });
	};

	return (
		<ThemeProvider theme={theme}>
			<Grid container component="main" sx={{ height: "100vh" }}  marginLeft={4}>
				<Grid container spacing={12}>
					<Grid item xs={8} mt={4}>
						<Typography variant="h5">
							Practice Details
						</Typography>
					</Grid>
					<Grid item xs={4} mt={4}>
						<img src={brightsquidLogo} width={141.8} height={30.8} alt="brightsquid"/>
					</Grid>
				</Grid>
			{/* Practice Name and Practice Phone */ }			
			<Grid container spacing={6}>

				<Grid item xs={2}>
					<Typography variant="body1" mt={7} >
						<strong> Practice Details</strong> 
					</Typography>
				</Grid>
				
				<Grid item xs={3}>
					<Typography variant="body1"> Practice Name </Typography>
					<TextField
						margin="normal"
						fullWidth
						id="practice_name"
						label="Practice Name"
						name="practice_name"
						autoFocus
					/>
				</Grid>
				<Grid item xs={3}>
					<Typography variant="body1"> Practice Phone </Typography>
					<TextField
						margin="normal"
						fullWidth
						name="practice_phone"
						label="Practice Phone"
						id="practice_phone"
					/>
				</Grid>
				<Grid item xs={3} mt={5} >
					<Typography variant="body1"> You are joining 150 other dental clinics in Calgary! </Typography>
					
				</Grid>
			</Grid>

			{/* Clinic Type and Clinic sub type */ }					
			<Grid container spacing={6}>
				<Grid item xs={2}>
					{/* Empty space to align*/}
				</Grid>
				<Grid item xs={3}>
					<Typography  mb={2}>Clinic Type</Typography>
					<FormControl fullWidth>
					<InputLabel>Clinic Type</InputLabel>
					{/* TO-DO: fill with actual data */}
					<Select id="clinic-select" label="Clinic Type">
						<MenuItem value={0}>Dental</MenuItem>
						<MenuItem value={0}>Family</MenuItem>
						<MenuItem value={0}>Hospital</MenuItem>
						<MenuItem value={0}>Mental Health </MenuItem>
					</Select>
					</FormControl>
				</Grid>
				<Grid item xs={3}>
					<Typography  mb={2}>Clinic Subtype</Typography>
					<FormControl fullWidth>
					<InputLabel> Clinic Subtype </InputLabel>
					{/* TO-DO: fill with actual data */}
					<Select id="country-select" label="Clinic Subtype">
						<MenuItem value={10}>Dental Laboratory</MenuItem>
						<MenuItem value={10}>Dental Laboratory</MenuItem>
						<MenuItem value={10}>Dental Laboratory</MenuItem>
					</Select>
					</FormControl>
				</Grid>

		
			</Grid>
			{/* PRACTICE ADDRESS: Country, State/province and City */ }
			<Grid container spacing={6}>
				<Grid item xs={2}>
					<Typography variant="body1"  mt={7}> <strong> Practice Address </strong>  </Typography>
				</Grid>
		
				<Grid item xs={3}>
					<Typography  mb={2}>Country</Typography>
					<FormControl fullWidth>
					<InputLabel> Country </InputLabel>
					{/* TO-DO: fill with actual data */}
					<Select id="country-select" label="Country">
						<MenuItem value={10}>Canada</MenuItem>
						<MenuItem value={20}>United States</MenuItem>
						<MenuItem value={30}>Canada</MenuItem>
					</Select>
					</FormControl>
				</Grid>
				<Grid item xs={3}>
					<Typography  mb={2}>Province</Typography>
					<FormControl fullWidth>
					<InputLabel> Province </InputLabel>
					{/* TO-DO: fill with actual data */}
					<Select id="province-select" label="Province">
						<MenuItem value={10}>Alberta</MenuItem>
						<MenuItem value={30}>British Columbia</MenuItem>
						<MenuItem value={20}>Manitoba</MenuItem>
						<MenuItem value={20}>New Brunswick</MenuItem>
						<MenuItem value={20}>Newfoundland and Labrador</MenuItem>
						<MenuItem value={20}>Nova Scotia</MenuItem>
						<MenuItem value={20}>Ontario</MenuItem>
						<MenuItem value={20}>Prince Edward Island</MenuItem>
						<MenuItem value={20}>Quebec</MenuItem>
						<MenuItem value={20}>Saskatchewan</MenuItem>
					</Select>
					</FormControl>
				</Grid>
				<Grid item xs={3}>
					<Typography  mb={2}>City</Typography>
					<FormControl fullWidth>
					<InputLabel> City </InputLabel>
					{/* TO-DO: fill with actual data */}
					<Select id="city-select" label="City">
						<MenuItem value={10}>Calgary</MenuItem>
						<MenuItem value={20}>Edmonton</MenuItem>
						<MenuItem value={30}>City 1</MenuItem>
						<MenuItem value={40}>City 2</MenuItem>
					</Select>
					</FormControl>
				</Grid>
			</Grid>
			
			{/* ABOUT YOU: Role and Specialty */}
			<Grid container spacing={6}>
				<Grid item xs={2}>
					<Typography variant="body1" mt={7}>  <strong> About you </strong></Typography>
				</Grid>
				<Grid item xs={3}>
						<Typography>Role</Typography>
						<RadioGroup
							row
							aria-labelledby="demo-row-radio-buttons-group-label"
							name="row-radio-buttons-group">
							<FormControlLabel value="Clinician" control={<Radio/>} label="Clinician" />
							<FormControlLabel value="Staff" control={<Radio/>} label="Staff" />
						</RadioGroup>
					</Grid>
			
					<Grid item xs={3}>
						<Typography  mb={2}> Specialty</Typography>
						<FormControl fullWidth>
						<InputLabel> Specialty </InputLabel>
						{/* TO-DO: fill with actual data */}
						<Select id="specialty-select" label="Specialty">
							<MenuItem value={10}>specialty</MenuItem>
							<MenuItem value={20}>specialty</MenuItem>
							<MenuItem value={30}>specialty</MenuItem>
						</Select>
						</FormControl>
					</Grid>	
			</Grid>
			<Grid container spacing={10}>
				<Grid item xs={10} mt={10}>
					<HorizontalLinearStepper> </HorizontalLinearStepper>
				</Grid>
			</Grid>
			{/* <HorizontalLinearStepper> </HorizontalLinearStepper> */}

			{/* <Grid container spacing={6}>
				<Grid item xs={6}>
					<Button>
						Back
					</Button>
				</Grid>
				<Grid item xs={6}>
					<Button>
						Do Later
					</Button>
					<Button>
						Continue
					</Button>
				</Grid>
			</Grid> */}

			</Grid>
		</ThemeProvider>
	);
}
