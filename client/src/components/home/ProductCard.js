import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
} from '@material-ui/core';
import imagePlacehodler from 'assets/images/img-placeholder.jpg';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from 'styles/productCardStyles';

const ProductCard = ({ name, category, description, price, classes }) => (
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
        <Button variant="outlined">Add to Cart</Button>
        <Typography>${price}</Typography>
      </div>
    </CardContent>
  </Card>
);

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default withStyles(styles)(ProductCard);
