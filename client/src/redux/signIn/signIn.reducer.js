import { SignInActionTypes } from './signIn.types';

const INITIAL_STATE = {
    phone: '',
    page: 1
};

const signInReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SignInActionTypes.UPDATE_PHONE:
            return {
                ...state,
                phone: action.payload
            };
        case SignInActionTypes.UPDATE_PAGE:
            return {
                ...state,
                page: action.payload
            };
        default:
            return state;
    }
};

export default signInReducer;