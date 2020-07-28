import shortid from 'shortid';
import api from '../api.service';
import {
  ADD_PRODUCT_CART,
  ALPHA_ORDER_FILTER,
  APP_LOADED,
  CHANGE_CUSTOMER_TYPE,
  CHANGE_EMAIL,
  CHANGE_PRODUCT_AMOUNT,
  DELETE_CUSTOMER_DATA,
  DELETE_PRODUCT_CART,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  GET_CUSTOMER,
  GET_CUSTOMER_FAIL,
  GET_CUSTOMER_SUCCESS,
  LOWEST_PRICE_FILTER,
  MOST_RESENT_FILTER,
  SAVE_CUSTOMER,
  SAVE_CUSTOMER_FAIL,
  SAVE_CUSTOMER_SUCCESS,
  START_AGAIN,
  PLACE_ORDER,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_FAIL,
} from './types';

// Home
export const onLoad = () => ({ type: APP_LOADED });
export const fetchProducts = (filter) => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });
  try {
    const response = await api.fetchProducts(filter);
    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      response: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_PRODUCTS_FAIL,
      message: error.message || 'Fetch failed',
    });
  }
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

// Cart
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

// Checkout
export const changeCustomerType = (value) => ({
  type: CHANGE_CUSTOMER_TYPE,
  value,
});
export const customerByEmail = (e, email) => async (dispatch) => {
  e.preventDefault();
  dispatch({ type: GET_CUSTOMER });
  try {
    const response = await api.fetchCustomerByEmail(email);
    dispatch({ type: GET_CUSTOMER_SUCCESS, customer: response.data });
  } catch (error) {
    dispatch({ type: GET_CUSTOMER_FAIL, message: error.message || 'Failed' });
  }
};
export const changeEmail = (e) => ({
  type: CHANGE_EMAIL,
  value: e.target.value,
});
export const resetData = () => ({
  type: DELETE_CUSTOMER_DATA,
});
export const saveCustomer = (customer, ownProps) => async (dispatch) => {
  dispatch({ type: SAVE_CUSTOMER });
  customer = { ...customer, id: parseInt(customer.id) };
  try {
    const response = await api.saveCustomer(customer);
    const { id_user } = response.data;
    dispatch({
      type: SAVE_CUSTOMER_SUCCESS,
      customer: { ...customer, id_user },
    });
    dispatch(placeOrder(ownProps));
  } catch (error) {
    dispatch({
      type: SAVE_CUSTOMER_FAIL,
      message:
        error.response.statusText +
          (error.response.data.errors
            ? error.response.data.errors.message
            : '') ||
        error.message ||
        'Failed',
    });
  }
};
export const placeOrder = (ownProps) => async (dispatch, getState) => {
  const state = getState();
  dispatch({ type: PLACE_ORDER });
  try {
    const id_order = shortid.generate();
    const body = {
      id_order,
      id_user: state.customer.data.id_user,
      total_price: state.cart.total,
      products: state.cart.products.map((p) => ({
        id_product: p.id_product,
        quantity: p.amount,
      })),
    };
    await api.saveOrder(body);
    dispatch({ type: PLACE_ORDER_SUCCESS, id_order });
    ownProps.history.push('/thanks');
  } catch (error) {
    dispatch({ type: PLACE_ORDER_FAIL, message: error.message });
  }
};

//Thanks
export const startAgain = () => ({ type: START_AGAIN });
