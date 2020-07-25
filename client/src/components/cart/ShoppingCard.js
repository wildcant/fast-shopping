import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
  Select,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import imagePlacehodler from 'assets/images/img-placeholder.jpg';
import PropTypes from 'prop-types';
import React from 'react';
import styles from 'styles/shoppingCardStyles';

const ShoppingCard = ({ name, category, price, classes }) => {
  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <CardMedia className={classes.media} image={imagePlacehodler} />
        <div className={classes.cardTop}>
          <Typography variant="h6">{name}</Typography>
          <div>
            {category.split('>').map((cat, id) => (
              <Chip key={id} variant="outlined" size="small" label={cat} />
            ))}
          </div>
        </div>
      </CardContent>
      <CardContent className={classes.contentBottom}>
        <div className={classes.cardBottom}>
          <div className={classes.cuantity}>
            <Typography>Unit Price</Typography>
            <Typography>${price}</Typography>
          </div>
          <div className={classes.cuantity}>
            <Typography>Qty</Typography>
            <Select variant="outlined" />
          </div>
          <div className={classes.cuantity}>
            <Typography variant="h5">${price}</Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

ShoppingCard.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  classes: PropTypes.object,
};

export default withStyles(styles)(ShoppingCard);
