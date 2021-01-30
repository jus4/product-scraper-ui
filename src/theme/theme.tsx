import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import green from '@material-ui/core/colors/green';

let theme = createMuiTheme({
  palette: {
    primary: {
        dark: teal[900],
        main: teal[500],
        light: teal[300],
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    h1: {
      fontWeight: 800,
      fontSize: "5rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h5: {
      lineHeight: 1.6
    }
  },
});
theme = responsiveFontSizes(theme);

export default theme;
