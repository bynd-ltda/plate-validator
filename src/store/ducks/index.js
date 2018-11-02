import { combineReducers } from 'redux';

import auth from './auth';
import valida from './valida'

export default combineReducers({
    auth,
    valida
});