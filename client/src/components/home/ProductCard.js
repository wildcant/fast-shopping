import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import imagePlacehodler from 'assets/images/img-placeholder.jpg';
import PropTypes from 'prop-types';
import React from 'react';
import styles from 'styles/productCardStyles';

const ProductCard = ({
  id_product,
  name,
  category,
  description,
  price,
  handleAddToCart,
  amount,
  classes,
}) => (
  <Card className={classes.root}>
    <CardMedia className={classes.media} image={imagePlacehodler} />
    <CardContent className={classes.content}>
      <div className={classes.cardTop}>
        <Typography variant="h5">{name}</Typography>
        <div>
          {category.split('>').map((cat, id) => (
            <Chip key={id} variant="outlined" size="small" label={cat} />
          ))}
        </div>
        <Typography className={classes.description} variant="body2">
          {description}
        </Typography>
      </div>
      <div className={classes.cardBottom}>
        <div className={classes.btn}>
          <Button
            onClick={() =>
              handleAddToCart({ id_product, name, category, price })
            }
            variant="outlined"
            disabled={amount >= 5}
          >
            {amount >= 5 ? 'Max amount' : ' Add to Cart'}
          </Button>
          <Typography
            className={`${classes.btnSpan} ${
              amount > 0 ? classes.visible : ''
            }`}
            component="span"
            variant="body1"
          >
            {amount} product{amount > 1 ? 's' : ''} in cart
          </Typography>
        </div>
        <Typography>${price}</Typography>
      </div>
    </CardContent>
  </Card>
);

ProductCard.propTypes = {
  id_product: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  amount: PropTypes.number.isRequired,
};

export default withStyles(styles)(ProductCard);
