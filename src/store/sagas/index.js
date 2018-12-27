import { all, takeLatest } from 'redux-saga/effects';

import { Types as AuthTypes } from './../ducks/auth';
import { Types as ValidateTypes } from './../ducks/valida';
import { Types as ReportTypes } from './../ducks/report';

import { doAuthRequest } from './auth';
import { doValidaRequest } from './valida';
import { doReportRequest } from './report';

export default function* rootSaga(){
    return yield all([
        takeLatest(AuthTypes.AUTH_REQUEST, doAuthRequest),
        takeLatest(ValidateTypes.VALIDA_REQUEST, doValidaRequest),
        takeLatest(ReportTypes.REPORT_REQUEST, doReportRequest),
    ]);
}