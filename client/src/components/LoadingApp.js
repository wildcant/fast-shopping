import { withStyles } from '@material-ui/core/styles';
import logoIcon from 'assets/images/logo.svg';
import React from 'react';
const styles = {
  '@keyframes loading': {
    '0%': {
      transform: 'scale(1.1, 1.1)',
    },
    '50%': {
      transform: 'scale(0.8, 0.8)',
    },
    '100%': {
      transform: 'scale(1.1, 1.1),',
    },
  },
  loader: {
    position: 'absolute',
    top: 'calc(50% - 4em)',
    left: 'calc(50% - 4em)',
    width: '6em',
    height: '6em',
    backgroundImage: `url(${logoIcon})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    animation: '$loading 0.9s infinite linear',
  },
};

const LoadingApp = ({ classes }) => <div className={classes.loader}></div>;
export default withStyles(styles)(LoadingApp);
