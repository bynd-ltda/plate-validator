export const Types = {
    AUTH_REQUEST: 'auth/AUTH_REQUEST',
    AUTH_SUCCESS: 'auth/AUTH_SUCCESS',
    AUTH_FAILURE: 'auth/AUTH_FAILURE',
    AUTH_LOAD: 'auth/AUTH_LOAD',
};

const initialState = {
    message: '',
    login_success: false,
    show_load: false
}

export default function auth(state = initialState, action) {
    switch (action.type) {
        case Types.AUTH_REQUEST:
            return { ...state ,show_load: false};
        case Types.AUTH_SUCCESS:
            return { ...state, message: action.payload.message, login_success: true ,show_load: false};
        case Types.AUTH_FAILURE:
            return { ...state, message: action.payload.message, login_success: false ,show_load: false};
        case Types.AUTH_LOAD:
            return { ...state, show_load: true };
        default:
            return state;
    }
}

export const Creators = {
    doAuthRequest: (email, password) => ({
        type: Types.AUTH_REQUEST,
        payload: {
            email: email,
            password: password,
        }
    }),
    doAuthSuccess: message => ({
        type: Types.AUTH_SUCCESS,
        payload: {
            message
        }
    }),
    doAuthError: message => ({
        type: Types.AUTH_FAILURE,
        payload: {
            message
        }
    })
}