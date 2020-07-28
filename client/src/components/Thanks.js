import React from 'react';
import { connect } from 'react-redux';
import { Typography, Button } from '@material-ui/core';
import {
  ThanksSection,
  ThanksIcon,
  Name,
  AddMargin,
} from 'styles/thanksStyles';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import Party from 'assets/images/party.svg';
import { useHistory } from 'react-router-dom';
import { startAgain } from 'actions';

const Thanks = ({ name, startAgain }) => {
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
          {shortid.generate()}. Your items will be soon at your door.
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
};

const mapStateToProps = ({ customer }) => ({
  name: customer.data.name,
});

export default connect(mapStateToProps, { startAgain })(Thanks);
