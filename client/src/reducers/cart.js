import {
  ADD_PRODUCT_CART,
  DELETE_PRODUCT_CART,
  CHANGE_PRODUCT_AMOUNT,
  PLACE_ORDER,
} from 'actions/types';
import { combineReducers } from 'redux';

const products = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT_CART:
      if (
        state
          .map((product) => product.id_product)
          .includes(action.product.id_product)
      ) {
        return state.map((product) => {
          if (product.id_product === action.product.id_product)
            return { ...product, amount: product.amount + 1 };
          return product;
        });
      }
      return [...state, { ...action.product, amount: 1 }];
    case DELETE_PRODUCT_CART:
      return state.filter(
        (product) => product.id_product !== action.id_product
      );
    case CHANGE_PRODUCT_AMOUNT:
      return state.map((product) => {
        if (product.id_product === action.productId)
          return { ...product, amount: action.newAmount };
        return product;
      });
    case PLACE_ORDER:
      return [];
    default:
      return state;
  }
};

const productsLength = (state = 0, action) => {
  switch (action.type) {
    case ADD_PRODUCT_CART:
      return state + 1;
    case DELETE_PRODUCT_CART:
      return state - action.amount;
    case CHANGE_PRODUCT_AMOUNT:
      return state - action.previousamount + action.newAmount;
    case PLACE_ORDER:
      return 0;
    default:
      return state;
  }
};

const total = (state = 0, action) => {
  switch (action.type) {
    case ADD_PRODUCT_CART:
      return state + action.product.price;
    case DELETE_PRODUCT_CART:
      return state - action.price * action.amount;
    case CHANGE_PRODUCT_AMOUNT:
      return (
        state -
        action.previousamount * action.price +
        action.newAmount * action.price
      );
    case PLACE_ORDER:
      return 0;
    default:
      return state;
  }
};

export default combineReducers({ products, productsLength, total });
