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
import { useHistory } from 'react-router-dom';

const Checkout = ({ type, cartProducts, total, data, changeCustomerType }) => {
  const history = useHistory();
  const formRef = useRef(null);
  const emailRef = useRef(null);
  const placeOrder = () => {
    if (type == 'new') {
      formRef.current.dispatchEvent(new Event('submit', { cancelable: true }));
    } else {
      const customer = { ...data };
      delete customer['phone'];
      const isCustomer = Object.values(customer).every(
        (field) => field !== 0 && field !== ''
      );
      if (isCustomer) {
        history.push('/thanks');
      } else {
        emailRef.current.focus();
      }
    }
  };

  return (
    <Section>
      <CustomerSection>
        <Typography variant="h4">Customer Information</Typography>
        <AuthWrapper>
          <AuthType handleChange={changeCustomerType} value={type} />
          <CustomerAuth type={type} formRef={formRef} emailRef={emailRef} />
        </AuthWrapper>
      </CustomerSection>
      <OrderSection>
        <Typography variant="h4">Order Summary</Typography>
        <ProductsTable products={cartProducts} />
        <RightAlignDiv>
          <Typography variant="h5">Total: ${total.toFixed(2)}</Typography>
          <Button
            type={type === 'new' ? 'submit' : 'button'}
            variant="outlined"
            onClick={() => placeOrder()}
          >
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
  data: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    address: PropTypes.string,
    phone: PropTypes.string,
  }),
};
const mapStateToProps = ({ customer, cart }) => ({
  type: customer.type,
  cartProducts: cart.products,
  total: cart.total,
  data: customer.data,
});

export default connect(mapStateToProps, { changeCustomerType })(Checkout);
