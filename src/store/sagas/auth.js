import { call } from 'redux-saga/effects';
import api from './../../services/api';


export function* doAuthRequest(action) {

    const { email, password } = action.payload;

    try {
    const response = yield call(api.get, `/auth`, {
        auth: {
            username: email,
            password: password
        }
    } )

    console.log(response);
} catch (err){
    console.log(err)
}

}