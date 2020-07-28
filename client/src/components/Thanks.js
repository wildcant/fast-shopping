import { Button, Typography } from '@material-ui/core';
import { startAgain } from 'actions';
import Party from 'assets/images/party.svg';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  AddMargin,
  Name,
  ThanksIcon,
  ThanksSection,
} from 'styles/thanksStyles';

const Thanks = ({ name, startAgain, orderId }) => {
  const history = useHistory();
  if (!name) history.push('/');
  const handleClick = () => {
    startAgain();
    history.push('/');
  };
  return (
    <ThanksSection>
      <AddMargin>
        <ThanksIcon src={Party} alt="" />
        <Typography variant="h4">Thanks for your purchase</Typography>
        <Typography variant="subtitle1">
          <Name>{name.split(' ')[0]}</Name>, we have created your order #
          {orderId}. Your items will be soon at your door.
        </Typography>
        <Typography variant="subtitle1">Stay safe.</Typography>
      </AddMargin>
      <Button variant="outlined" onClick={handleClick}>
        Start Again
      </Button>
    </ThanksSection>
  );
};

Thanks.propTypes = {
  name: PropTypes.string.isRequired,
  startAgain: PropTypes.func.isRequired,
  orderId: PropTypes.string.isRequired,
};

const mapStateToProps = ({ customer, order }) => ({
  name: customer.data.name,
  orderId: order.orderId,
});

export default connect(mapStateToProps, { startAgain })(Thanks);
