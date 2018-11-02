import { call } from 'redux-saga/effects';
import api from './../../services/api';


export function* doValidaRequest(action) {

    const { email, password, plate } = action.payload;

console.log(plate);
    try {
    const response = yield call(api.get, `/validate`,{ plate: plate }, {
        auth: {
            username: email,
            password: password,
            
        }
        
    } )

    console.log(response);
} catch (err){
    console.log(err)
}

}