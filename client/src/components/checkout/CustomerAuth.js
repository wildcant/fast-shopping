import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Btn, Left, Right, StyledDiv } from 'styles/checkoutStyles';
import CustomerForm from './CustomerForm';

const CustomerAuth = ({ type }) => {
  return (
    <StyledDiv>
      <Left />
      <Right>
        {type === 'new' ? (
          <CustomerForm />
        ) : (
          <>
            <TextField
              fullWidth
              required
              margin="dense"
              label="Email"
              variant="outlined"
            />
            <Btn variant="outlined">Lookup</Btn>
          </>
        )}
      </Right>
    </StyledDiv>
  );
};
CustomerAuth.propTypes = {
  type: PropTypes.string.isRequired,
};
export default CustomerAuth;
