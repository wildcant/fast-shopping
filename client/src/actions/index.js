import api from '../api.service';
import {
  APP_LOADED,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  ALPHA_ORDER_FILTER,
  LOWEST_PRICE_FILTER,
  MOST_RESENT_FILTER,
  ADD_PRODUCT_CART,
  CHANGE_PRODUCT_AMOUNT,
  DELETE_PRODUCT_CART,
  CHANGE_CUSTOMER_TYPE,
  GET_CUSTOMER,
  GET_CUSTOMER_SUCCESS,
  GET_CUSTOMER_FAIL,
  CHANGE_EMAIL,
  DELETE_CUSTOMER_DATA,
  SAVE_CUSTOMER,
  SAVE_CUSTOMER_SUCCESS,
  SAVE_CUSTOMER_FAIL,
} from './types';

export const onLoad = () => ({ type: APP_LOADED });

export const fetchProducts = (filter) => (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });
  return api.fetchProducts(filter).then(
    (response) => {
      dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        response: response.data,
      });
    },
    (error) =>
      dispatch({
        type: FETCH_PRODUCTS_FAIL,
        message: error.message || 'Fetch failed',
      })
  );
};

export const handleFilterChange = (filterOption) => (dispatch) => {
  switch (filterOption) {
    case 'Most Relevant':
      return dispatch({ type: ALPHA_ORDER_FILTER });
    case 'Lowest Price':
      return dispatch({ type: LOWEST_PRICE_FILTER });
    case 'Most Recent':
      return dispatch({ type: MOST_RESENT_FILTER });
    default:
      return;
  }
};

export const addProductToCart = (product) => ({
  type: ADD_PRODUCT_CART,
  product,
});

export const deleteProductFromCard = (id_product, price, amount) => ({
  type: DELETE_PRODUCT_CART,
  id_product,
  price,
  amount,
});

export const changeProductAmount = (
  previousamount,
  newAmount,
  price,
  productId
) => ({
  type: CHANGE_PRODUCT_AMOUNT,
  previousamount,
  newAmount,
  price,
  productId,
});

export const changeCustomerType = (value) => ({
  type: CHANGE_CUSTOMER_TYPE,
  value,
});

export const customerByEmail = (e, email) => (dispatch) => {
  e.preventDefault();
  console.log(email);
  dispatch({ type: GET_CUSTOMER });
  api.fetchCustomerByEmail(email).then(
    (response) => {
      dispatch({ type: GET_CUSTOMER_SUCCESS, customer: response.data });
    },
    (error) => {
      dispatch({ type: GET_CUSTOMER_FAIL, message: error.message || 'Failed' });
    }
  );
};

export const changeEmail = (e) => ({
  type: CHANGE_EMAIL,
  value: e.target.value,
});

export const resetData = () => ({
  type: DELETE_CUSTOMER_DATA,
});

export const saveCustomer = (customer, ownProps) => (dispatch) => {
  dispatch({ type: SAVE_CUSTOMER });
  api.saveCustomer(customer).then(
    (response) => {
      dispatch({
        type: SAVE_CUSTOMER_SUCCESS,
        customer: response.data,
      });
      ownProps.history.push('thanks');
    },
    (error) => {
      console.log({ ...error });
      console.log(error.statusText);
      dispatch({
        type: SAVE_CUSTOMER_FAIL,
        message: error.response.statusText || error.message || 'Failed',
      });
    }
  );
};
