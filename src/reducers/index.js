import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  defaultState: (state = {}) => state
});

export default rootReducer;
