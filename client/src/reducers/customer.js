import {
  CHANGE_CUSTOMER_TYPE,
  GET_CUSTOMER,
  GET_CUSTOMER_SUCCESS,
  GET_CUSTOMER_FAIL,
  CHANGE_EMAIL,
  DELETE_CUSTOMER_DATA,
  SAVE_CUSTOMER,
  SAVE_CUSTOMER_SUCCESS,
  SAVE_CUSTOMER_FAIL,
} from 'actions/types';
import { combineReducers } from 'redux';

const defaultData = {
  name: '',
  id: 0,
  address: '',
  phone: '',
  email: 'sample.mail@test.com',
};
const data = (state = defaultData, action) => {
  switch (action.type) {
    case SAVE_CUSTOMER_SUCCESS:
      return action.customer;
    case GET_CUSTOMER_SUCCESS:
      return action.customer;
    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.value,
      };
    case DELETE_CUSTOMER_DATA:
      return defaultData;
    default:
      return state;
  }
};

const isLoading = (state = false, action) => {
  switch (action.type) {
    case SAVE_CUSTOMER:
    case GET_CUSTOMER:
      return true;
    case SAVE_CUSTOMER_SUCCESS:
    case SAVE_CUSTOMER_FAIL:
    case GET_CUSTOMER_SUCCESS:
    case GET_CUSTOMER_FAIL:
      return false;
    default:
      return state;
  }
};

const errorMsg = (state = null, action) => {
  switch (action.type) {
    case SAVE_CUSTOMER_FAIL:
    case GET_CUSTOMER_FAIL:
      return action.message;
    case SAVE_CUSTOMER:
    case SAVE_CUSTOMER_SUCCESS:
    case GET_CUSTOMER:
    case GET_CUSTOMER_SUCCESS:
    case CHANGE_CUSTOMER_TYPE:
      return null;
    default:
      return state;
  }
};

const type = (state = 'new', action) => {
  switch (action.type) {
    case CHANGE_CUSTOMER_TYPE:
      return action.value;
    default:
      return state;
  }
};

export default combineReducers({ data, type, isLoading, errorMsg });
