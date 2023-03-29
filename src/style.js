
import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#1074AE',
    },
    secondary: {
      main: '#55C9F4',
    },
    inherit: {
      main: '#B3B3B3'
    },
  },

  typography: {
    fontFamily: "sans-serif",   // want poppins 
  },
});

export default customTheme;