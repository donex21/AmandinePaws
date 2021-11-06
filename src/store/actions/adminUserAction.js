import { LOGIN_ERROR,
     LOGIN_SUCCESS,
     GET_SINGLE_USER,
     CLEAN_SINGLE_USER
    } from '../../constants';
import dataservice from '../../service/dataservice';

export const signInAuth = (userEmailPwd) => {
    return (dispatch, getState, { getFirebase }) => {

        const email = userEmailPwd.userEmail;
        const pwd = userEmailPwd.userPassword;
        
        dataservice.auth( email, pwd )
        .then(() => {    
            dispatch({ type: LOGIN_SUCCESS});   
        }).catch(() =>
        {               
            dispatch({ type: LOGIN_ERROR });
        });
    }
}

export const getSingleUser = (user) => {
    return (dispatch, getState) => {
        dispatch( {type: GET_SINGLE_USER, user});
    }
}

export const cleanSingleUser = () => {
    return (dispatch, getState) => {
        dispatch( {type: CLEAN_SINGLE_USER});
    }
}
