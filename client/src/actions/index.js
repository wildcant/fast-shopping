import api from '../api.service';
import {
  APP_LOADED,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  ALPHA_ORDER_FILTER,
  LOWEST_PRICE_FILTER,
  MOST_RESENT_FILTER,
} from './types';

export const onLoad = () => ({ type: APP_LOADED });

export const fetchProducts = (filter) => (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST, filter });
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
      break;
  }
};
