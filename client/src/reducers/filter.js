import {
  ALPHA_ORDER_FILTER,
  MOST_RESENT_FILTER,
  LOWEST_PRICE_FILTER,
} from 'actions/types';

const defaultState = { sort: '', dir: '', option: 'Alpha Order' };
export default (state = defaultState, action) => {
  switch (action.type) {
    case ALPHA_ORDER_FILTER:
      return defaultState;
    case LOWEST_PRICE_FILTER:
      return { sort: 'PRICE', dir: 'ASC', option: 'Lowest Price' };
    case MOST_RESENT_FILTER:
      return { sort: 'DATE', dir: 'ASC', option: 'Most Recent' };
    default:
      return state;
  }
};
