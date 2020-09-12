import { createSelector } from 'reselect';

const selectSignIn = state => state.signIn;

export const selectPhone = createSelector(
    [selectSignIn],
    signIn => signIn.phone
);

export const selectPage = createSelector(
    [selectSignIn],
    signIn => signIn.page
);