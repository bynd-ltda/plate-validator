import {fork} from 'redux-saga/effects'

import inicioSaga from './inicioSaga';
import placaSaga from './placaSaga';
export default function* root() {
    try {
        console.log("iniciou sagas");
        yield fork(inicioSaga);   
        yield fork(placaSaga);   

    } catch (e) {
        console.error(e)
    }
}
