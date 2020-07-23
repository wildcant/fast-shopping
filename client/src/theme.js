import {
  responsiveFontSizes,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
let theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[300],
    },
  },
  typography: {},
});

theme = responsiveFontSizes(theme);

export default theme;
