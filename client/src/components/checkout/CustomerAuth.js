import PropTypes from 'prop-types';
import React from 'react';
import { StyledDiv } from 'styles/checkoutStyles';
import CustomerByEmail from './CustomerByEmail';
import CustomerForm from './CustomerForm';

const CustomerAuth = ({ type, formRef, emailRef }) => {
  return (
    <StyledDiv>
      {type === 'new' ? (
        <CustomerForm formRef={formRef} />
      ) : (
        <CustomerByEmail emailRef={emailRef} />
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
  emailRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};
export default CustomerAuth;
