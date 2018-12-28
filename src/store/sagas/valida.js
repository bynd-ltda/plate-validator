import { call, put } from 'redux-saga/effects';
import api from './../../services/api';
import apiTeste from './../../services/api';

import { Creators as ValidaActions } from './../ducks/valida';

export function* doValidaRequest(action) {

    const { email, password, plate } = action.payload;

    // console.log(' verificar placa: ' + plate + ' senha: ' + password + ' email: ' + email);
    try {

    const response = yield call(apiTeste.get, `/pvl/validate?plate=${plate}`, {
        // const response = yield call(apiTeste.get, `/pvl/validate?plate=ddd-2222`, {
        auth: {
            // username: email,
            username: "abraao@urbbox.com.br",
            // password: password,//2APLf9bbfYxgTYMZPm3
            password: '2APLf9bbfYxgTYMZPm3',//
        }
        
    } )

        // console.log('Pesquisa placa: ' + response);
    if(response) {
        // console.log('Sucesso pesquisa placa: ' + response.data.data);
        yield put(ValidaActions.doValidaSuccess(response.data.data));
        
    } else {
        console.log('Sucesso mais com erro');
        yield put(ValidaActions.doValidaError('Dados nao encontrado'));
    }

} catch (err){
    console.log('erro inesperado')
    console.log(err)
    // yield put(ValidaActions.doValidaError('Tente novamente'));
}

}