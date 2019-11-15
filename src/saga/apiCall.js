export const apiCall = async (url, method, reqBody) => {
    var response;
    if(method === 'GET' || method === 'DELETE'){
        response = await fetch(url, {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
    else if(method === 'POST' || method === 'PUT'){
        response = await fetch(url, {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reqBody)
        })
    }
    const res = await response.json();
    return res;
}