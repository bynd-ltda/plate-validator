import { call, put, select} from 'redux-saga/effects';
import api from './../../services/api';

import { Creators as ReportActions } from './../ducks/report';

export function* doReportRequest(action) {

    const { email, password, plate } = action.payload;

    console.log('email: ' + email + ' , senha: ' + password + ' , placa: ' + plate);

    try {
        const response = yield call(api.post, `/pvl/report?plate=${plate}`, {
        // const response = yield call(api.post, `/pvl/report?plate=bbb-4433`, {
            auth: {
                // username: email,
                // password: password
                username: 'elton.rafaelmelo@gmail.com',
                password: '2APLf9bbfYxgTYMZPm3'
            }
        })

        if (response) {
            console.log(response);
            console.log('reportado com sucesso');
            yield put(ReportActions.doReportSuccess(' '));

        } else {
            console.log(response);
            yield put(ReportActions.doReportError('Erro ao reporta placa'));
        }
    } catch (err) {
        yield put(ReportActions.doReportError('Algum problema foi identificado no servidor. Tente novamente'));
        console.log('erro: \\_0_/ ' + err);
    }

}