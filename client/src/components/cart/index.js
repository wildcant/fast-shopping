import React from 'react';
import { Typography, Button } from '@material-ui/core';
import ShopingCard from './ShoppingCard';
import { makeStyles } from '@material-ui/core/styles';
import styles from 'styles/cartStyles';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from 'actions';

const useStyles = makeStyles(styles);

const Cart = ({ products, total, ...props }) => {
  const { changeProductAmount, deleteProductFromCard } = props;
  const classes = useStyles();
  return (
    <>
      <div className={classes.top}>
        <Typography variant="h3">Shopping Cart</Typography>
        <Button variant="outlined">Check Out</Button>
      </div>
      <ul className={classes.cardsContainer}>
        {products.map((product, id) => (
          <li className={classes.listItem} key={id}>
            <ShopingCard
              {...product}
              handleAmountChange={changeProductAmount}
              handleDelete={deleteProductFromCard}
            />
          </li>
        ))}
      </ul>
      <NavLink to="/" className={classes.link}>
        Continue Shopping
      </NavLink>
      <div className={classes.bottom}>
        <Typography variant="h4">Total: ${total.toFixed(2)}</Typography>
        <Button variant="outlined">Check Out</Button>
      </div>
    </>
  );
};

Cart.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id_product: PropTypes.string.isRequired,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      amount: PropTypes.number,
    })
  ).isRequired,
  total: PropTypes.number.isRequired,
  changeProductAmount: PropTypes.func.isRequired,
  deleteProductFromCard: PropTypes.func.isRequired,
};
const mapStateToProps = ({ cart: { products, total } }) => ({
  products,
  total,
});
export default connect(mapStateToProps, actions)(Cart);
