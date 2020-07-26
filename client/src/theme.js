import { orange } from '@material-ui/core/colors';
import {
  responsiveFontSizes,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from '@material-ui/core/styles';
import fonts from 'styles/fonts';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[300],
    },
  },
  typography: {
    fontFamily: 'Signika, Arial',
  },
  overrides: {
    MuiOutlinedInput: {
      input: {
        padding: '.4em',
      },
    },
    MuiInputLabel: {
      outlined: {
        transform: 'translate(14px, 10px) scale(1)',
      },
    },
    MuiFormHelperText: {
      marginDense: {
        marginTop: 0,
      },
    },
    MuiCssBaseline: {
      '@global': {
        '@font-face': [...fonts],
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
