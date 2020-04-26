import {dataApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_NAME_AND_CUSTOMERS = 'SET_USER_NAME_AND_CUSTOMERS';
const UPDATE_USER_NAME = 'UPDATE_USER_NAME';
const UPDATE_USER_PASSWORD = 'UPDATE_USER_PASSWORD';
const LOGOUT = 'LOGOUT';


let initialState = {
    username: '',
    password: '',
    accessToken: '',
    refreshToken: '',
    isAuth: false,
    isStaff: false,

    allowedCustomers: ''
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                username: action.username,
                isAuth: true
                // username: action.username,
                // accessToken: action.accessToken,
                // refreshToken: action.refreshToken,
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
            };
        case SET_USER_NAME_AND_CUSTOMERS:
            return {
                ...state,
                username: action.username,
                isAuth: true,
                allowedCustomers: action.allowedCustomers,
                isStaff: action.isStaff
            };
        case LOGOUT:
            return {
                ...state,
                isAuth: false
            }
        default:
            return state;
    }
}
export const authenticate = (username) =>
    ({type: SET_USER_DATA, username});

export const setUserNameAndCustomers = (username, allowedCustomers, isStaff) =>
    ({type: SET_USER_NAME_AND_CUSTOMERS, username, allowedCustomers, isStaff});

export const loggedOut = () =>
    ({type: LOGOUT});


export const authenticateUser = (userName, password) => {
    return (dispatch) => {
        dataApi.authorize(userName, password).then(data => {
            if (data.detail) {
                let message = 'Invalid user credentials';
                dispatch(stopSubmit('login', {_error: message}));
            } else {
                dataApi.me(data.access).then(data => {
                    dispatch(setUserNameAndCustomers(data.Username, data.Customers, data.IsStaff));
                })
            }
        });
    }
}

export const onRefreshCheckIfAuth = (accessToken) => {
    return (dispatch) => {
        dataApi.me(accessToken).then(data => {
            dispatch(setUserNameAndCustomers(data.Username, data.Customers, data.IsStaff));
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(loggedOut());
    }
}

export default authReducer;
