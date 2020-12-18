import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
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
});

export default theme;