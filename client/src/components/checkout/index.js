import { Button, Typography } from '@material-ui/core';
import { changeCustomerType } from 'actions';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { connect } from 'react-redux';
import {
  AuthWrapper,
  CustomerSection,
  OrderSection,
  RightAlignDiv,
  Section,
} from 'styles/checkoutStyles';
import AuthType from './AuthType';
import CustomerAuth from './CustomerAuth';
import ProductsTable from './ProductsTable';

const Checkout = ({ type, cartProducts, total, changeCustomerType }) => {
  const formRef = useRef(null);
  const placeOrder = () =>
    formRef.current.dispatchEvent(new Event('submit', { cancelable: true }));

  return (
    <Section>
      <CustomerSection>
        <Typography variant="h4">Customer Information</Typography>
        <AuthWrapper>
          <AuthType handleChange={changeCustomerType} value={type} />
          <CustomerAuth type={type} formRef={formRef} />
        </AuthWrapper>
      </CustomerSection>
      <OrderSection>
        <Typography variant="h4">Order Summary</Typography>
        <ProductsTable products={cartProducts} />
        <RightAlignDiv>
          <Typography variant="h5">Total: ${total.toFixed(2)}</Typography>
          <Button variant="outlined" onClick={() => placeOrder()}>
            Place Order
          </Button>
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
