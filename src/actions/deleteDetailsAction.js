export const deleteDetails = (cred) => ({
    type: 'DELETE_USER_DETAILS',
    payload: cred
});

export const deleteDetailsSuccess = (success) => ({
    type: 'DELETE_USER_DETAILS_SUCCESS',
    payload: success
});