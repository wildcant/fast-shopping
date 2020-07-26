import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Left, RatioWrapper, Right } from 'styles/checkoutStyles';

const AuthType = ({ value, handleChange }) => (
  <RatioWrapper>
    <Left>
      <Typography variant="body1">Are you?</Typography>
    </Left>
    <Right>
      <RadioGroup
        row
        aria-label="position"
        name="position"
        defaultValue="new"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      >
        <FormControlLabel
          value="new"
          control={<Radio color="primary" />}
          label="New Customer"
        />
        <FormControlLabel
          value="old"
          control={<Radio color="primary" />}
          label="Existing Customer"
        />
      </RadioGroup>
    </Right>
  </RatioWrapper>
);

AuthType.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default AuthType;
