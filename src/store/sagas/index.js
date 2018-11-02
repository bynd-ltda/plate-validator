import { all, takeLatest } from 'redux-saga/effects';

import { Types as AuthTypes } from './../ducks/auth';
import { Types as ValidateTypes } from './../ducks/valida';

import { doAuthRequest } from './auth';
import { doValidaRequest } from './valida';

export default function* rootSaga(){
    return yield all([
        takeLatest(AuthTypes.AUTH_REQUEST, doAuthRequest),
        takeLatest(ValidateTypes.VALIDA_REQUEST, doValidaRequest),
    ]);
}