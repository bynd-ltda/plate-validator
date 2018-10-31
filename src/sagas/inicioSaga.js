import { call, put, fork , take, select,takeLatest, takeEvery} from 'redux-saga/effects'

import { NavigatorModule} from '../modules';
const { back, reset, push, pop } = NavigatorModule.actions;

function* loginUser(){
    yield put(push('Validador'));
}

export default function* root() {
    console.log("Saga Inicio");
    yield takeLatest('Inicio/CLICK_LOGIN', loginUser);
}
