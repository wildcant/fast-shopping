import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';
import Logo from 'assets/images/logo.svg';
import headerStyles from 'styles/headerStyles';
const useStyles = makeStyles(headerStyles);
import CartButton from './CartButton';

export default () => {
  const classes = useStyles();
  const location = useLocation();
  console.log(location.pathname);
  return (
    <AppBar className={classes.navBar} position="static">
      <Toolbar className={classes.toolbar}>
        <div className={classes.nav}>
          <div className={classes.logo}>
            <img className={classes.logoImg} src={Logo} alt="" />
            <Typography className={classes.title} variant="h3">
              Fast Shopping
            </Typography>
          </div>
          {location.pathname == '/' ? <CartButton /> : <></>}
        </div>
      </Toolbar>
    </AppBar>
  );
};
