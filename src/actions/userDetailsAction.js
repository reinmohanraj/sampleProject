export const userDetails = (cred) => ({
    type: 'FETCH_USER_DETAILS',
    payload: cred
});

export const userDetailsSuccess = (success) => ({
    type: 'FETCH_USER_DETAILS_SUCCESS',
    payload: success
});