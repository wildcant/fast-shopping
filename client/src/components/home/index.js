import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as actions from 'actions';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styles from 'styles/homeStyles';
import Paginator from './Paginator';
import ProductCard from './ProductCard';
import SelectFilter from './SelectFilter';
import Loading from '../Loading';

const options = ['Most Relevant', 'Lowest Price', 'Most Recent'];
const useStyles = makeStyles(styles);
const Home = ({
  products,
  isFetching,
  errorMsg,
  paginator,
  filter,
  cartProducts,
  ...props
}) => {
  const { fetchProducts, handleFilterChange, addProductToCart } = props; // Actions
  const classes = useStyles();

  useEffect(() => {
    fetchProducts({
      page: paginator.currentPage,
      sort: filter.sort,
      dir: filter.dir,
    });
    // eslint-disable-next-line
  }, [filter]);
  const pageChanged = (e, value) =>
    fetchProducts({ page: value, sort: filter.sort, dir: filter.dir });
  const filterChanged = (e) => handleFilterChange(e.target.value);
  if (isFetching) return <Loading />;
  if (errorMsg && !products.length) return <div>{errorMsg}</div>;
  return (
    <section>
      <div className={classes.filterWrapper}>
        <Typography>Order By: </Typography>
        <SelectFilter
          selectedOption={filter.option}
          options={options}
          handleSelect={filterChanged}
        />
      </div>
      <ul className={classes.cardsContainer}>
        {products.map((product, id) => {
          const cartProductIdx = cartProducts.findIndex(
            ({ id_product }) => id_product === product.id_product
          );
          const amount =
            cartProductIdx !== -1 ? cartProducts[cartProductIdx].amount : 0;
          return (
            <li className={classes.listItem} key={id}>
              <ProductCard
                {...product}
                amount={amount}
                handleAddToCart={addProductToCart}
              />
            </li>
          );
        })}
      </ul>
      {products.length >= 20 ? (
        <div className={classes.paginationWrapper}>
          <Paginator
            pages={paginator.numberOfPages}
            current={paginator.currentPage}
            handleChange={pageChanged}
          />
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

Home.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      date: PropTypes.string,
      description: PropTypes.string,
      id_product: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
    })
  ).isRequired,
  isFetching: PropTypes.bool.isRequired,
  errorMsg: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  paginator: PropTypes.shape({
    numberOfPages: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf([null]),
    ]),
    currentPage: PropTypes.number.isRequired,
    isLastPage: PropTypes.bool,
  }).isRequired,
  fetchProducts: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  addProductToCart: PropTypes.func.isRequired,
  filter: PropTypes.shape({
    sort: PropTypes.string,
    dir: PropTypes.string,
    option: PropTypes.string,
  }),
  cartProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id_product: PropTypes.string,
      amount: PropTypes.number,
    })
  ).isRequired,
};

const mapStateToProps = ({ products, filter, cart }) => ({
  products: products.products,
  isFetching: products.isFetching,
  errorMsg: products.errorMsg,
  paginator: products.pagination,
  filter,
  cartProducts: cart.products.map(({ id_product, amount }) => ({
    id_product,
    amount,
  })),
});

export default connect(mapStateToProps, actions)(Home);
