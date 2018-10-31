import { combineReducers } from 'redux';
import nav from './navigation';
import usuario from './usuario';

const AppReducer = combineReducers({
  nav,usuario
});

const rootReducer = (state, action) => {
  return AppReducer(state, action);
}

export default rootReducer;
