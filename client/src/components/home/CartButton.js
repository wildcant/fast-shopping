import React from 'react';
import { Badge, IconButton } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const CartButton = ({ productsLength }) => {
  const history = useHistory();
  return (
    <IconButton aria-label="cart" onClick={() => history.push('cart')}>
      <Badge badgeContent={productsLength} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

CartButton.propTypes = {
  productsLength: PropTypes.number.isRequired,
};
export default connect(({ cart }) => ({ productsLength: cart.productsLength }))(
  CartButton
);
