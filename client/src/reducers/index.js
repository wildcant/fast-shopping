import { combineReducers } from 'redux';
import common from './common';
import products from './products';
import filter from './filter';
import cart from './cart';

export default combineReducers({
  common,
  products,
  filter,
  cart,
});
