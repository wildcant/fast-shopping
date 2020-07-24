import { APP_LOADED } from 'actions/types';

const defaultState = {
  app_loaded: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case APP_LOADED:
      return {
        ...state,
        app_loaded: true,
      };

    default:
      return state;
  }
};
