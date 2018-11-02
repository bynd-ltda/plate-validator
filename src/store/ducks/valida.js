export const Types = {
    VALIDA_REQUEST: 'valida/VALIDA_REQUEST',
    VALIDA_SUCCESS: 'valida/VALIDA_SUCCESS',
    VALIDA_FAILURE: 'valida/VALIDA_FAILURE',
};

const initialState = []

export default function valida( state = initialState, action) {
    switch(action.type){
        case Types.VALIDA_REQUEST :
           return [ ...state ];
        case Types.VALIDA_SUCCESS :
           return [ ...state, action.payload.data];
        case Types.VALIDA_FAILURE :
           return [ ...state, action.payload.message];
        default:
           return state;
    }
}

export const Creators = {
    doValidaRequest : (email , password, plate ) => ({
        type: Types.VALIDA_REQUEST,
        payload: {
            email: email,
            password: password,
            plate: plate
        }
    }),
    doValidaSuccess : data => ({
        type: Types.VALIDA_SUCCESS,
        payload: {
            data
        }
    }),
    doValidaError : message => ({
        type: Types.VALIDA_FAILURE,
        payload: {
            message
        }
    })
}