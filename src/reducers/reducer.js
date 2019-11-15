import { REGISTER, LOGIN_SUCCESS, REGISTER_SUCCESS, FETCH_USER_DETAILS_SUCCESS, EDIT_USER_DETAILS_SUCCESS, DELETE_USER_DETAILS_SUCCESS } from '../constants/action-types';

const initaialState = {
    userInfo: []
};

const reducer = (state= initaialState, action) => {
    switch(action.type){
        case REGISTER:
            return state;
        case LOGIN_SUCCESS:
            return {userInfo: [action.json]};
        case REGISTER_SUCCESS:
            return { userInfo: [action.json]};
        case FETCH_USER_DETAILS_SUCCESS:
            return {userInfo: [action.json]};
        case EDIT_USER_DETAILS_SUCCESS:
            return {userInfo: [action.json]};
        case DELETE_USER_DETAILS_SUCCESS:
            return {userInfo: []};
        default:
            return state;
    }
};

export default reducer;