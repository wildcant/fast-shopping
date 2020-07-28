import { Button, Typography } from '@material-ui/core';
import { changeCustomerType, placeOrder } from 'actions';
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
import { withRouter } from 'react-router-dom';
import LoadingCircular from '../LoadingCircular';

const Checkout = ({
  type,
  cartProducts,
  total,
  data,
  productsLength,
  isSaving,
  errorMsg,
  changeCustomerType,
  placeOrder,
}) => {
  const formRef = useRef(null);
  const emailRef = useRef(null);
  const handlePlaceOrder = () => {
    if (type == 'new') {
      formRef.current.dispatchEvent(new Event('submit', { cancelable: true }));
    } else {
      const customer = { ...data };
      delete customer['phone'];
      const isCustomer = Object.values(customer).every(
        (field) => field !== 0 && field !== ''
      );
      if (isCustomer) {
        placeOrder();
      } else {
        emailRef.current.focus();
      }
    }
  };
  if (isSaving) return <LoadingCircular open={isSaving} />;
  if (errorMsg) return <div>{errorMsg}</div>;
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
            disabled={productsLength === 0}
            type={type === 'new' ? 'submit' : 'button'}
            variant="outlined"
            onClick={handlePlaceOrder}
          >
            Place Order
          </Button>
        </RightAlignDiv>
      </OrderSection>
    </Section>
  );
};
Checkout.propTypes = {
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
    id_user: PropTypes.number,
    name: PropTypes.string,
    id: PropTypes.number,
    address: PropTypes.string,
    phone: PropTypes.string,
  }),
  productsLength: PropTypes.number.isRequired,
  changeCustomerType: PropTypes.func.isRequired,
  placeOrder: PropTypes.func.isRequired,
  isSaving: PropTypes.bool.isRequired,
  errorMsg: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
};
const mapStateToProps = ({ customer, cart, order }) => ({
  type: customer.type,
  cartProducts: cart.products,
  productsLength: cart.productsLength,
  total: cart.total,
  data: customer.data,
  isSaving: order.isSaving,
  errorMsg: order.errorMsg,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeCustomerType: (value) => dispatch(changeCustomerType(value)),
  placeOrder: () => dispatch(placeOrder(ownProps)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Checkout)
);
