import { call, put, select} from 'redux-saga/effects';
import api from './../../services/api';

import { Creators as AuthActions } from './../ducks/auth';

export function* doAuthRequest(action) {

    const { email, password } = action.payload;

    try {
    const response = yield call(api.get, `/auth`, {
        auth: {
            username: email,
            password: password
        }
    } )

    if(response) {
        console.log(response);
        yield put(AuthActions.doAuthSuccess(response.data));
        
    } else {
        yield put(AuthActions.doAuthError('Usuario nao encontrado'));
    }

    
    

    
} catch (err){
    yield put(AuthActions.doAuthError('Algum problema foi identificado no servidor.'));
}

}