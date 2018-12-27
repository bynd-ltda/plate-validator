import { combineReducers } from 'redux';

import auth from './auth';
import valida from './valida';
import report from './report';

export default combineReducers({
    auth,
    valida,
    report,
});