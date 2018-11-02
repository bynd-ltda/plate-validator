export const Types = {
    AUTH_REQUEST: 'auth/AUTH_REQUEST',
    AUTH_SUCCESS: 'auth/AUTH_SUCCESS',
    AUTH_FAILURE: 'auth/AUTH_FAILURE',
};

const initialState = []

export default function auth( state = initialState, action) {
    switch(action.type){
        case Types.AUTH_REQUEST :
           return [ ...state ];
        case Types.AUTH_SUCCESS :
           return [ ...state, action.payload.data];
        case Types.AUTH_FAILURE :
           return [ ...state, action.payload.message];   
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
    doAuthSuccess : data => ({
        type: Types.AUTH_SUCCESS,
        payload: {
            data
        }
    }),
    doAuthError : message => ({
        type: Types.AUTH_FAILURE,
        payload: {
            message
        }
    })
}