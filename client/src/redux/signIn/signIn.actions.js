import { SignInActionTypes } from './signIn.types';

export const updatePhone = (phone) => ({
    type: SignInActionTypes.UPDATE_PHONE,
    payload: phone
});

export const updatePage = (pageNo) => ({
    type: SignInActionTypes.UPDATE_PAGE,
    payload: pageNo
});