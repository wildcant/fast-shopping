import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as actions from 'actions';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styles from 'styles/cartStyles';
import ShopingCard from './ShoppingCard';
const useStyles = makeStyles(styles);

const Cart = ({ products, total, ...props }) => {
  const { changeProductAmount, deleteProductFromCard } = props;
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <div className={classes.top}>
        <Typography variant="h3">Shopping Cart</Typography>
        <Button variant="outlined" onClick={() => history.push('/checkout')}>
          Check Out
        </Button>
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
      <Link to="/" className={classes.link}>
        Continue Shopping
      </Link>
      <div className={classes.bottom}>
        <Typography variant="h4">Total: ${total.toFixed(2)}</Typography>
        <Button variant="outlined" onClick={() => history.push('/checkout')}>
          Check Out
        </Button>
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
