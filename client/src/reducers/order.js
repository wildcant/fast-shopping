import {
  PLACE_ORDER,
  PLACE_ORDER_FAIL,
  PLACE_ORDER_SUCCESS,
  START_AGAIN,
} from 'actions/types';
import { combineReducers } from 'redux';

const orderId = (state = '', action) => {
  switch (action.type) {
    case PLACE_ORDER_SUCCESS:
      return action.id_order;
    case START_AGAIN:
      return '';
    default:
      return state;
  }
};

const isSaving = (state = false, action) => {
  switch (action.type) {
    case PLACE_ORDER:
      return true;
    case PLACE_ORDER_SUCCESS:
    case PLACE_ORDER_FAIL:
      return false;
    default:
      return state;
  }
};

const errorMsg = (state = null, action) => {
  switch (action.type) {
    case PLACE_ORDER_FAIL:
      return action.message;
    case START_AGAIN:
    case PLACE_ORDER:
    case PLACE_ORDER_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default combineReducers({ orderId, isSaving, errorMsg });
