export const editDetails = (cred) => ({
    type: 'EDIT_USER_DETAILS',
    payload: cred
});

export const editDetailsSuccess = (success) => ({
    type: 'EDIT_USER_DETAILS_SUCCESS',
    payload: success
});