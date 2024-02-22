import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#7c955d",
    },
    secondary: {
        main: "#eeeed5"
    },
  },
  breakpoints: {
    values: {
        xs: 0,
        sm: 500,
        md: 900,
        lg: 1200,
        xl: 1530,
    }
  },
});

export default theme;