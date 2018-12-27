export const Types = {
    REPORT_REQUEST: 'report/REPORT_REQUEST',
    REPORT_SUCCESS: 'report/REPORT_SUCCESS',
    REPORT_FAILURE: 'report/REPORT_FAILURE',
};

const initialState = {
    message_success_report: '',
    report_success: false
}

export default function report(state = initialState, action) {
    switch (action.type) {
        case Types.REPORT_REQUEST:
            return { ...state };
        case Types.REPORT_SUCCESS:
            return { ...state, message_success_report: action.payload.message_success_report, report_success: true };
        case Types.REPORT_FAILURE:
            return { ...state, message_success_report: action.payload.message_success_report, report_success: false };
        default:
            return { ...state };
    }
}

export const Creators = {
    doReportRequest: (email, password, plate) => ({
        type: Types.REPORT_REQUEST,
        payload: {
            email: email,
            password: password,
            plate: plate
        }
    }),
    doReportSuccess: message_success_report => ({
        type: Types.REPORT_SUCCESS,
        payload: {
            message_success_report
        }
    }),
    doReportError: message_success_report => ({
        type: Types.REPORT_FAILURE,
        payload: {
            message_success_report
        }
    })
}