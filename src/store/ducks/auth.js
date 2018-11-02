export const Types = {
    AUTH_REQUEST: 'auth/AUTH_REQUEST',
    AUTH_SUCCESS: 'auth/AUTH_SUCCESS',
    AUTH_FAILURE: 'auth/AUTH_FAILURE',
};

const initialState = []

export default function auth( state = initialState, action) {
    switch(action.type){
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
    })
}