import { call, put, fork , take, select,takeLatest, takeEvery} from 'redux-saga/effects'

import { NavigatorModule} from '../modules';
const { back, reset, push, pop } = NavigatorModule.actions;

function* plateValidator(){
    // yield put(push('Detalhes'));
}
export default function* root() {
    console.log("Iniciou FrontEnd");
    yield takeLatest('Placa/CLICK_VALIDAR', plateValidator);
}
