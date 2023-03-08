/** @format */

import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Copyright(props) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			fontSize="11px"
			{...props}
		>
			{"By using this service, you agree to our "}
			<Link
				id="terms-of-use"
				color="inherit"
				href="https://brightsquid.com/pages/brightsquid-application-terms-of-use"
			>
				Terms of Use
			</Link>{" "}
			{" and "}
			<Link
				id="privacy-policy"
				color="inherit"
				href="https://brightsquid.com/pages/brightsquid-application-privacy-policy"
			>
				Privacy Policy
			</Link>
			{""}
		</Typography>
	);
}
