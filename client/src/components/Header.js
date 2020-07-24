import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Logo from 'assets/images/logo.svg';
import headerStyles from 'styles/headerStyles';
const useStyles = makeStyles(headerStyles);

export default () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.navBar} position="static">
      <Toolbar className={classes.toolbar}>
        <div className={classes.nav}>
          <div className={classes.logo}>
            <img className={classes.logoImg} src={Logo} alt="" />
            <Typography className={classes.title}>Fast Shopping</Typography>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};
