import { Typography } from '@material-ui/core';
import { changeCustomerType } from 'actions';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import {
  AuthWrapper,
  CustomerSection,
  OrderSection,
  Section,
  RightAlignDiv,
} from 'styles/checkoutStyles';
import AuthType from './AuthType';
import CustomerAuth from './CustomerAuth';
import ProductsTable from './ProductsTable';

const Checkout = ({ type, cartProducts, total, changeCustomerType }) => {
  return (
    <Section>
      <CustomerSection>
        <Typography variant="h4">Customer Information</Typography>
        <AuthWrapper>
          <AuthType handleChange={changeCustomerType} value={type} />
          <CustomerAuth type={type} />
        </AuthWrapper>
      </CustomerSection>
      <OrderSection>
        <Typography variant="h4">Order Summary</Typography>
        <ProductsTable products={cartProducts} />
        <RightAlignDiv>
          <Typography variant="h5">Total: ${total.toFixed(2)}</Typography>
          <Button variant="outlined">Place Order</Button>
        </RightAlignDiv>
      </OrderSection>
    </Section>
  );
};
Checkout.propTypes = {
  changeCustomerType: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  cartProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id_product: PropTypes.string.isRequired,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      amount: PropTypes.number,
    })
  ).isRequired,
  total: PropTypes.number.isRequired,
};
const mapStateToProps = ({ customer, cart }) => ({
  type: customer.type,
  cartProducts: cart.products,
  total: cart.total,
});

export default connect(mapStateToProps, { changeCustomerType })(Checkout);
