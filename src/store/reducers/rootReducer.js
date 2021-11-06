import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import adminUserReducer from './adminUserReducer';
const rootReducer = combineReducers({
    adminuser: adminUserReducer,
    firebase: firebaseReducer
});

export default rootReducer