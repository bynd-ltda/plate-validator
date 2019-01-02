import { call, put } from 'redux-saga/effects';
import api from './../../services/api';

import { Creators as ValidaActions } from './../ducks/valida';

export function* doValidaRequest(action) {

    const { email, password, plate } = action.payload;

    console.log(' verificar placa: ' + plate + ' senha: ' + password + ' email: ' + email);
    try {

    const response = yield call(api.get, `/pvl/validate?plate=${plate}`, {
        auth: {
            // username: email,
            username: email === "" ? "abraao@urbbox.com.br" : email,
            // password: password,//2APLf9bbfYxgTYMZPm3
            password: '2APLf9bbfYxgTYMZPm3',//
        }
        
    } )

    if(response) {
        // console.log('Sucesso pesquisa placa: ' + response.data.data);
        console.log(response);
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