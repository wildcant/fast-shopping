import { TextField } from '@material-ui/core';
import React from 'react';
import { Right, Left } from 'styles/checkoutStyles';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { saveCustomer } from 'actions';
import { Typography, CircularProgress } from '@material-ui/core';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import { withRouter } from 'react-router-dom';

const CustomerForm = ({ formRef, saveCustomer, loading, errorMsg }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => saveCustomer(data);
  if (loading) return <CircularProgress />;
  return (
    <>
      <Left />
      <Right>
        {errorMsg ? (
          <div>
            <Typography variant="subtitle1" color="error">
              <ReportProblemOutlinedIcon color="error" />
              {errorMsg}
            </Typography>
          </div>
        ) : (
          <></>
        )}
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            required
            margin="dense"
            label="Full Name"
            variant="outlined"
            name="name"
            inputRef={register({ required: true })}
            error={errors.name ? true : false}
            helperText={errors.name ? 'Required Field' : ''}
          />
          <TextField
            fullWidth
            required
            margin="dense"
            label="ID"
            variant="outlined"
            name="id"
            inputRef={register({ required: true })}
            error={errors.id ? true : false}
            helperText={errors.id ? 'Required Field' : ''}
          />
          <TextField
            fullWidth
            required
            margin="dense"
            label="Address"
            variant="outlined"
            name="address"
            inputRef={register({ required: true })}
            error={errors.address ? true : false}
            helperText={errors.address ? 'Required Field' : ''}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Phone Number"
            variant="outlined"
            name="phone"
            inputRef={register()}
          />
          <TextField
            fullWidth
            required
            margin="dense"
            label="Email"
            variant="outlined"
            name="email"
            inputRef={register({ required: true })}
            error={errors.email ? true : false}
            helperText={errors.email ? 'Required Field' : ''}
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
  redirectTo: PropTypes.string,
};
const mapStateToProps = ({
  customer: { isLoading, errorMsg, redirectTo },
}) => ({
  loading: isLoading,
  errorMsg,
  redirectTo,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  saveCustomer: (customer) => dispatch(saveCustomer(customer, ownProps)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CustomerForm)
);
