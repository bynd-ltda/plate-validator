import { call, put } from 'redux-saga/effects';
import api from './../../services/api';
import apiTeste from './../../services/apiTeste';

import { Creators as ValidaActions } from './../ducks/valida';

export function* doValidaRequest(action) {

    const { email, password, plate } = action.payload;

    console.log('verificar placa: ' + plate + 'senha: ' + password + 'email: ' + email);
    try {

    // const response = yield call(apiTeste.get, `/pvl/validate?plate=${plate}`, {
        const response = yield call(apiTeste.get, `/pvl/validate?plate=ddd-2222`, {
        auth: {
            username: email,
            password: password,
        }
        
    } )
    if(response) {
        console.log(response.data.data);
        yield put(ValidaActions.doValidaSuccess(response.data.data));
        
    } else {
        yield put(ValidaActions.doValidaError('Dados nao encontrado'));
    }

} catch (err){
    console.log('erro inesperado')
    console.log(err)
    yield put(ValidaActions.doValidaError('Tente novamente'));
}

}