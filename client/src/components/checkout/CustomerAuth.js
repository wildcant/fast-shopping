import PropTypes from 'prop-types';
import React from 'react';
import { StyledDiv } from 'styles/checkoutStyles';
import CustomerForm from './CustomerForm';
import CustomerByEmail from './CustomerByEmail';

const CustomerAuth = ({ type, formRef }) => {
  return (
    <StyledDiv>
      {type === 'new' ? (
        <CustomerForm formRef={formRef} />
      ) : (
        <CustomerByEmail />
      )}
    </StyledDiv>
  );
};
CustomerAuth.propTypes = {
  type: PropTypes.string.isRequired,
  formRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};
export default CustomerAuth;
