export const Types = {
    REPORT_REQUEST: 'auth/REPORT_REQUEST',
    REPORT_SUCCESS: 'auth/REPORT_SUCCESS',
    REPORT_FAILURE: 'auth/REPORT_FAILURE',
};

const initialState = {
    message: '',
    report_success: false
}

export default function report( state = initialState, action) {
    switch(action.type){
        case Types.REPORT_REQUEST :
           return { ...state };
        case Types.REPORT_SUCCESS :
           return { ...state, message: action.payload.message, report_success: true};
        case Types.REPORT_SUCCESS :
           return { ...state, message: action.payload.message, report_success: false};
        default:
           return state;
    }
}

export const Creators = {
    doReportRequest : (email , password ) => ({
        type: Types.AUTH_REQUEST,
        payload: {
            email: email,
            password: password,
        }
    }),
        doReportSuccess : message => ({
        type: Types.AUTH_SUCCESS,
        payload: {
            message
        }
    }),
    doReportError : message => ({
        type: Types.AUTH_FAILURE,
        payload: {
            message
        }
    })
}