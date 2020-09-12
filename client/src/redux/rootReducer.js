import { combineReducers } from 'redux';
import signInReducer from './signIn/signIn.reducer';

const rootReducer = combineReducers({
    signIn: signInReducer
});

export default rootReducer;