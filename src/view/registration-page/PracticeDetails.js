/** @format */

// import brightsquidLogo from '../../img/brightsquid_logo.PNG';

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
import MedicalPhoto from "../assets/props/MedicalPhotoProp.js";
import Copyright from "../assets/props/Copyrights.js";

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';

import { useEffect, useState } from "react"

const theme = createTheme();

export default function PracticeDetails() {
	const [value, setValue] = useState("");

	return (
		<ThemeProvider theme={theme}>
			<Grid container component="main" sx={{ height: "100vh"}}>
				<CssBaseline />
				<Grid
					item
					xs={false}
					sm={4}
					md={3}
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
				/>
				<Grid item xs={12} sm={8} md={9} component={Paper} elevation={6} square>

					{/* Right side*/}
					<Box sx={{ my: 8, mx: 4, display: "flex", flexDirection: "column",  alignItems: "left", }} >
						<Box component="form" sx={{ mt: 1 }} >
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

							{/* Practice Name and Practice Phone */ }			
							<Grid container spacing={12}>
								<Grid item xs={2}>
									<Typography variant="body1" mt={5} >
										<strong> Practice Details</strong> 
									</Typography>
								</Grid>

								<Grid item xs={5} mt={7}>
									<Typography variant="body1"> Practice Name <strong className='asterisk' style={{color: "red"}}> * </strong></Typography>
									<TextField
										margin="normal"
										fullWidth
										id="practice_name"
										label="Practice Name"
										name="practice_name"
										
									/>
								</Grid>
								<Grid item xs={5} mt={7}>
									<Typography variant="body1"> Practice Phone </Typography>
									<PhoneInput
										// fix me, label disappear, similar to text fields
										specialLabel={""}
										country={'ca'}
										// defaultValue={10}
										inputProps={{shrink: "false"}}
										disableDropdown={true}
										disableSearchIcon={true}
										value={value}
										onChange={setValue}/>
								</Grid>
							</Grid>

							{/* Clinic Type and Clinic sub type */ }					
							<Grid container spacing={12}>
								<Grid item xs={2}>
									{/* Empty space to align*/}
								</Grid>
								<Grid item xs={5} mt={5}>
									<Typography  mb={2}>Clinic Type<strong className='asterisk' style={{color: "red"}}> * </strong></Typography>
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
								<Grid item xs={5} mt={5}>
									<Typography  mb={2}>Clinic Subtype <strong className='asterisk' style={{color: "red"}}> * </strong></Typography>
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
							<Grid container spacing={12}>
								<Grid item xs={2}>
									<Typography variant="body1"  mt={7}> <strong> Practice Address </strong>  </Typography>
								</Grid>
						
								<Grid item xs={5} mt={5}>
									<Typography  mb={2}>Country<strong className='asterisk' style={{color: "red"}}> * </strong></Typography>
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
								<Grid item xs={5}>
									<Typography  mb={2} mt={5}>Province<strong className='asterisk' style={{color: "red"}}> * </strong></Typography>
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
							</Grid>
							<Grid container spacing={12}>
								<Grid item xs={2}/>	{/* Empty grid item to align the City dropdown*/}

								<Grid item xs={5} mt={5}>
									<Typography  mb={2}>City<strong className='asterisk' style={{color: "red"}}> * </strong></Typography>
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
							{/* TO-DO: MOVE TO PREVIOUS PAGE! ABOUT YOU: Role and Specialty */}
							{/* <Grid container spacing={6}>
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
										{/* TO-DO: fill with actual data 
										<Select id="specialty-select" label="Specialty">
											<MenuItem value={10}>specialty</MenuItem>
											<MenuItem value={20}>specialty</MenuItem>
											<MenuItem value={30}>specialty</MenuItem>
										</Select>
										</FormControl>
									</Grid>	
							</Grid> */}		

							{/* Fix to snap from bottom */}
							<Grid container spacing={10} >
								<Grid item xs={10} mt={5} >
									<HorizontalLinearStepper> </HorizontalLinearStepper>
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