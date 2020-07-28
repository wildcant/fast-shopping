import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Logo from 'assets/images/logo.svg';
import React from 'react';
import { useLocation } from 'react-router-dom';
import headerStyles from 'styles/headerStyles';
import CartButton from './home/CartButton';
const useStyles = makeStyles(headerStyles);

export default () => {
  const classes = useStyles();
  const location = useLocation();
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
