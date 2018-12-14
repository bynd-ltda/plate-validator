export const Types = {
    AUTH_REQUEST: 'auth/AUTH_REQUEST',
    AUTH_SUCCESS: 'auth/AUTH_SUCCESS',
    AUTH_FAILURE: 'auth/AUTH_FAILURE',
};

const initialState = {
    message: '',
    login_success: false
}

export default function auth( state = initialState, action) {
    switch(action.type){
        case Types.AUTH_REQUEST :
           return { ...state };
        case Types.AUTH_SUCCESS :
            // console.log('login sucesso ' + action)
            // console.log('AUTH_SUCCESS ' + state)
           // return [ ...state, action.payload.data];
           return { ...state, message: action.payload.message, login_success: true};
           // return [ ...state, login_success: true];
        case Types.AUTH_FAILURE :
            // console.log('AUTH_FAILURE ' + state)
            // console.log('AUTH_FAILURE ' + state)
           return { ...state, message: action.payload.message, login_success: false};
           // return [ ...state,  login_success: true];   
        default:
           return state;
    }
}

export const Creators = {
    doAuthRequest : (email , password ) => ({
        type: Types.AUTH_REQUEST,
        payload: {
            email: email,
            password: password,
        }
    }),
    // doAuthSuccess : data => ({
        doAuthSuccess : message => ({
        type: Types.AUTH_SUCCESS,
        // payload: {
        //     data
        // }
        payload: {
            message
        }
    }),
    doAuthError : message => ({
        type: Types.AUTH_FAILURE,
        payload: {
            message
        }
    })
}