export const registerCred = (cred) => ({
    type: 'REGISTER',
    payload: {
        userName: cred.uName,
        password: cred.pass,
        firstName: cred.fName,
        lastName: cred.lName
    }
});

export const registerSuccess = (success) => ({
    type: 'REGISTER_SUCCESS',
    payload: success
});