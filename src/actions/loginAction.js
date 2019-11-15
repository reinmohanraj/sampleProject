export const loginCred = (cred) => ({
    type: 'LOGIN',
    payload: {
        userName: cred.uName,
        password: cred.pass
    }
});

export const loginSuccess = (success) => ({
    type: 'LOGIN_SUCCESS',
    payload: success
})