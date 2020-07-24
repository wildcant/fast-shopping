import React from 'react';
import { Badge, IconButton } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default () => (
  <IconButton aria-label="cart">
    <Badge badgeContent={4} color="secondary">
      <ShoppingCartIcon />
    </Badge>
  </IconButton>
);
