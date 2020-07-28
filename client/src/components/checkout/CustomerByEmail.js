import { TextField, Typography } from '@material-ui/core';
import * as actions from 'actions';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import {
  Btn,
  DataWrapper,
  Left,
  LinkStyle,
  Right,
} from 'styles/checkoutStyles';

const CustomerByEmail = ({
  email,
  loading,
  data,
  errorMsg,
  emailRef,
  ...props
}) => {
  const { changeEmail, customerByEmail, resetData } = props;
  if (loading) return <Typography variant="body1">Loading...</Typography>;
  if (data.name !== '')
    return (
      <DataWrapper>
        <Typography variant="h4">Welcome back, {data.name}</Typography>
        <Typography variant="body1">ID: {data.id}</Typography>
        <Typography variant="body1">Address: {data.address}</Typography>
        {data.phone ? (
          <Typography variant="body1">Phone Number: {data.phone}</Typography>
        ) : (
          <></>
        )}
        <Typography variant="body1">Email: {email}</Typography>
        <LinkStyle variant="body2" onClick={() => resetData()}>
          No {data.name.split(' ')[0]}? Lookup again
        </LinkStyle>
      </DataWrapper>
    );
  return (
    <>
      <Left />
      <Right>
        <form aria-label="form" onSubmit={(e) => customerByEmail(e, email)}>
          <TextField
            placeholder="jhondoe@email.co"
            fullWidth
            inputRef={emailRef}
            required
            margin="dense"
            label="Email"
            InputLabelProps={{ htmlFor: 'email' }}
            id="email"
            variant="outlined"
            type="email"
            value={email}
            onChange={changeEmail}
            error={errorMsg !== null}
            helperText={errorMsg ? `Customer not found. ${errorMsg}` : ''}
          />
          <Btn type="submit" variant="outlined">
            Lookup
          </Btn>
        </form>
      </Right>
    </>
  );
};

CustomerByEmail.propTypes = {
  customerByEmail: PropTypes.func.isRequired,
  changeEmail: PropTypes.func.isRequired,
  resetData: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    id_user: PropTypes.number,
    name: PropTypes.string,
    id: PropTypes.number,
    address: PropTypes.string,
    phone: PropTypes.string,
  }),
  errorMsg: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  emailRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};

const mapStateToProps = ({ customer: { data, isLoading, errorMsg } }) => ({
  email: data.email,
  loading: isLoading,
  data,
  errorMsg,
});
export default connect(mapStateToProps, actions)(CustomerByEmail);
