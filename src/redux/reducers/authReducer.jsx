import { TYPES } from "../Types"

// auth state and auth reducer
const inisialState = {
    isAuth: false,
    success: '',
    error: '',
    // loading: false
}

export const authReducer = (state = inisialState, action) => {

    // SWITCH CASE
    switch (action.type) {
        case TYPES.LOGIN:
            return {
                ...state,
                isAuth: action.payload.isAuth
            }

        case TYPES.LOGOUT:
            return {
                ...state,
                isAuth: action.payload.isAuth
            }

        case TYPES.SUBMIT:
            return {
                ...state,
                success: action.payload.success
            }

        case TYPES.ERROR:
            return {
                ...state,
                error: action.payload.error
            }

        default:
            return state
    }


    // IF ELSE
    // if (action.type === TYPES.LOGIN) {
    //     return {
    //         ...state,
    //         isAuth: action.payload.isAuth
    //     }
    //     } else if (action.type === TYPES.LOGOUT) {
    //     return {
    //         ...state,
    //         isAuth: action.payload.isAuth
    //     }
    //     } else {
    //         return state
    // }
}