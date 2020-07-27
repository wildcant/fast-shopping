import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
  Select,
  IconButton,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import imagePlacehodler from 'assets/images/img-placeholder.jpg';
import PropTypes from 'prop-types';
import React from 'react';
import styles from 'styles/shoppingCardStyles';
import range from 'lodash.range';
import DeleteIcon from '@material-ui/icons/Delete';

const amountOptions = range(1, 6);

const ShoppingCard = ({
  id_product,
  name,
  category,
  price,
  amount,
  handleAmountChange,
  handleDelete,
  classes,
}) => {
  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <CardMedia className={classes.media} image={imagePlacehodler} />
        <div className={classes.cardTop}>
          <IconButton
            className={classes.delete}
            aria-label="delete"
            onClick={() => handleDelete(id_product, price, amount)}
          >
            <DeleteIcon />
          </IconButton>
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
            <Select
              className={classes.select}
              native
              variant="outlined"
              value={amount}
              inputProps={{ 'aria-label': 'qty' }}
              onChange={(e) =>
                handleAmountChange(
                  amount,
                  Number.parseFloat(e.target.value),
                  price,
                  id_product
                )
              }
            >
              {amountOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </Select>
          </div>
          <div className={classes.cuantity}>
            <Typography variant="h5">${(price * amount).toFixed(2)}</Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

ShoppingCard.propTypes = {
  id_product: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  classes: PropTypes.object,
  handleAmountChange: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default withStyles(styles)(ShoppingCard);
