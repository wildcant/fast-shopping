import { combineReducers } from 'redux';
import cart from './cart';
import common from './common';
import customer from './customer';
import filter from './filter';
import products from './products';
import order from './order';

export default combineReducers({
  common,
  products,
  filter,
  cart,
  customer,
  order,
});
