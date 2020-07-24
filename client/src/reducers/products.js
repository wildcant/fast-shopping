import {
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from 'actions/types';
import { combineReducers } from 'redux';

const paginationDefaultState = {
  numberOfPages: null,
  currentPage: 1,
  isLastPage: false,
};
const pagination = (state = paginationDefaultState, action) => {
  const res = { ...action.response };
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      delete res['products'];
      console.log(res);
      return res;
    default:
      return state;
  }
};

const products = (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return action.response.products;

    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return true;
    case FETCH_PRODUCTS_SUCCESS:
    case FETCH_PRODUCTS_FAIL:
      return false;
    default:
      return state;
  }
};

const errorMsg = (state = null, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_FAIL:
      return action.message;
    case FETCH_PRODUCTS_REQUEST:
    case FETCH_PRODUCTS_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default combineReducers({ products, pagination, isFetching, errorMsg });
