export const credentials = (cred) => ({
    type: 'CRED',
    payload: {
        userName: cred.uName,
        password: cred.pass
    } 
});
