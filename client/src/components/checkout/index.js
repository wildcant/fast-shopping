import { Typography } from '@material-ui/core';
import { changeCustomerType } from 'actions';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import {
  AuthWrapper,
  CustomerSection,
  OrderSection,
  Section,
} from 'styles/checkoutStyles';
import AuthType from './AuthType';
import CustomerAuth from './CustomerAuth';

const Checkout = ({ changeCustomerType, type }) => {
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
      </OrderSection>
    </Section>
  );
};
Checkout.propTypes = {
  changeCustomerType: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
const mapStateToProps = ({ customer }) => ({
  type: customer.type,
});

export default connect(mapStateToProps, { changeCustomerType })(Checkout);
