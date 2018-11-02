import { all, takeLatest } from 'redux-saga/effects';

import { Types as AuthTypes } from './../ducks/auth';

import { doAuthRequest } from './auth';

export default function* rootSaga(){
    return yield all([
        takeLatest(AuthTypes.AUTH_REQUEST, doAuthRequest),
    ]);
}