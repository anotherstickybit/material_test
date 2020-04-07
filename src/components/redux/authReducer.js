import {dataApi} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const UPDATE_USER_NAME = 'UPDATE_USER_NAME';
const UPDATE_USER_PASSWORD = 'UPDATE_USER_PASSWORD';


let initialState = {
    username: '',
    password: '',
    accessToken: '',
    refreshToken: '',
    isAuth: false,

    allowedCustomers: ''
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                // username: action.username,
                accessToken: action.accessToken,
                refreshToken: action.refreshToken,
                isAuth: true
                // allowedCustomers: action.allowedCustomers
            };
        case UPDATE_USER_NAME:
            return {
                ...state,
                username: action.body
            };
        case UPDATE_USER_PASSWORD:
            return {
                ...state,
                password: action.body
            }
        default:
            return state;
    }
}

export const updateUserNameCreator = (body) => ({type: UPDATE_USER_NAME, body});
export const updateUserPasswordCreator = (body) => ({type: UPDATE_USER_PASSWORD, body});

export const authenticate = (accessToken, refreshToken) =>
    ({type: SET_USER_DATA, accessToken, refreshToken});

export const authenticateUser = (userName, password) => {
    return (dispatch) => {
        dataApi.authorize(userName, password).then(data => {
            dispatch(authenticate(data.access, data.refresh));
        });
    }
}

export const updateUserName = (body) => {
    return (dispatch => {
        dispatch(updateUserNameCreator(body));
    });
}

export const updatePassword = (body) => {
    return (dispatch) => {
        dispatch(updateUserPasswordCreator(body));
    }
}


export default authReducer;
