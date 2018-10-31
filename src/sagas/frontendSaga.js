import { call, put, fork , take, select,takeLatest, takeEvery} from 'redux-saga/effects'

import { NavigatorModule, Register} from '../modules';
const { back, reset, push, pop } = NavigatorModule.actions;

function* openRegister(){
    yield put(push('Register'));
}

function* registerUser(){
    yield put(reset('HomeDrawer'));
}
function* loginUser(){
    yield put(reset('HomeDrawer'));
}
function* openAddScreen(){
    yield put(push('Adicionar'));
}
function* backList(){
    yield put(push('Home'));
}
function* detailsItem(){
    yield put(push('Detalhes'));
}
export default function* root() {
    console.log("Iniciou FrontEnd");
    yield takeLatest('Inicio/CLICK_OPEN_REGISTER', openRegister);
    yield takeLatest('Inicio/CLICK_LOGIN', loginUser);
    yield takeLatest('Register/CLICK_REGISTER', registerUser);
    yield takeLatest('CLICK_OPEN_ADD_ITEM', openAddScreen);
    yield takeLatest('Item/CLICK_ADD', backList);
    yield takeLatest('Item/CLICK_ITEM', detailsItem);
    
}
