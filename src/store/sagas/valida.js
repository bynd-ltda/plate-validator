import { call, put } from 'redux-saga/effects';
import api from './../../services/api';

import { Creators as ValidaActions } from './../ducks/valida';

export function* doValidaRequest(action) {

    const { email, password, plate } = action.payload;

console.log(plate);
    try {
    const response = yield call(api.get, `/pvl/validate?plate=${plate}`, {
        auth: {
            username: email,
            password: password,
        }
        
    } )
    if(response) {
        console.log(response);
        yield put(ValidaActions.doValidaSuccess(response.data));
        
    } else {
        yield put(ValidaActions.doValidaError('Dados nao encontrado'));
    }

} catch (err){
    console.log(err)
}

}