import { CHANGE_CUSTOMER_TYPE } from 'actions/types';
import { combineReducers } from 'redux';

const defaultData = {
  name: '',
  id: '',
  address: '',
  number: '',
  email: '',
};
const data = (state = defaultData, action) => {
  switch (action.type) {
    case CHANGE_CUSTOMER_TYPE:
      return state;

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
export default combineReducers({ data, type });
