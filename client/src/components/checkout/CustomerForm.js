import { TextField, Typography } from '@material-ui/core';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import { saveCustomer } from 'actions';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { ErrorMessage, Left, Right } from 'styles/checkoutStyles';

const CustomerForm = ({ formRef, saveCustomer, loading, errorMsg }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => saveCustomer(data);
  if (loading)
    return (
      <>
        <Left />
        <Right>
          <Typography variant="body1">Saving...</Typography>
        </Right>
      </>
    );
  return (
    <>
      <Left />
      <Right>
        {errorMsg ? (
          <div>
            <ErrorMessage variant="subtitle1" color="error">
              <ReportProblemOutlinedIcon color="error" />
              {errorMsg}
            </ErrorMessage>
          </div>
        ) : (
          <></>
        )}
        <form aria-label="form" ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            placeholder="Jhon Doe"
            fullWidth
            required
            margin="dense"
            label="Full Name"
            InputLabelProps={{ htmlFor: 'name' }}
            id="name"
            variant="outlined"
            name="name"
            inputRef={register({ required: true })}
            error={errors.name ? true : false}
            helperText={errors.name ? 'This field is required' : ''}
          />
          <TextField
            placeholder={123456}
            fullWidth
            required
            margin="dense"
            label="ID"
            type="number"
            InputLabelProps={{ htmlFor: 'id' }}
            id="id"
            variant="outlined"
            name="id"
            inputRef={register({ required: true })}
            error={errors.id ? true : false}
            helperText={errors.id ? 'This field is required' : ''}
          />
          <TextField
            placeholder="Main Street, #100-200, Wondreland"
            fullWidth
            required
            margin="dense"
            label="Address"
            InputLabelProps={{ htmlFor: 'address' }}
            id="address"
            variant="outlined"
            name="address"
            inputRef={register({ required: true })}
            error={errors.address ? true : false}
            helperText={errors.address ? 'This field is required' : ''}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Phone Number"
            InputLabelProps={{ htmlFor: 'phone' }}
            id="phone"
            variant="outlined"
            name="phone"
            inputRef={register()}
          />
          <TextField
            placeholder="jhondoe@email.co"
            fullWidth
            required
            margin="dense"
            label="Email"
            InputLabelProps={{ htmlFor: 'email' }}
            id="email"
            variant="outlined"
            name="email"
            type="email"
            inputRef={register({ required: true })}
            error={errors.email ? true : false}
            helperText={errors.email ? 'This field is required' : ''}
          />
        </form>
      </Right>
    </>
  );
};

CustomerForm.propTypes = {
  formRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  saveCustomer: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  errorMsg: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
};
const mapStateToProps = ({ customer: { isLoading, errorMsg } }) => ({
  loading: isLoading,
  errorMsg,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  saveCustomer: (customer) => dispatch(saveCustomer(customer, ownProps)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CustomerForm)
);
