import { LOGIN_ERROR, 
    LOGIN_SUCCESS, 
    INVALID_EMAIL_PASSWORD,
    GET_SINGLE_USER,
    CLEAN_SINGLE_USER
} from '../../constants'

const initstate = {
    userError: null,
    user: null
}

const adminUserReducer = (state = initstate, action) => {
    switch(action.type){
        case LOGIN_ERROR:
            return {
                ...state,
                userError: INVALID_EMAIL_PASSWORD
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                userError: null
            }
        case GET_SINGLE_USER:
            return {
                ...state,
                user: action.user
            }
        case CLEAN_SINGLE_USER:
            return {
                ...state,
                user: null
            }

        default:
                return state
    }
}

export default adminUserReducer
