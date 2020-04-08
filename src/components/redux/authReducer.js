import {dataApi} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_NAME = 'SET_USER_NAME';
const UPDATE_USER_NAME = 'UPDATE_USER_NAME';
const UPDATE_USER_PASSWORD = 'UPDATE_USER_PASSWORD';
const LOGOUT = 'LOGOUT';


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
        case SET_USER_NAME:
            return {
                ...state,
                username: action.username,
                isAuth: true
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

export const setUserName = (username) =>
    ({type: SET_USER_NAME, username});

export const loggedOut = () =>
    ({type: LOGOUT});


export const authenticateUser = (userName, password) => {
    return (dispatch) => {
        dataApi.authorize(userName, password).then(data => {
            dataApi.me(data.access).then(data => {
                dispatch(authenticate(data.username));
            })
        });
    }
}

export const onRefreshCheckIfAuth = (accessToken) => {
    return (dispatch) => {
        dataApi.me(accessToken).then(data => {
            dispatch(setUserName(data.username));
        })
    }
}

export const logout = () => {
    return (dispatch) => {
            dispatch(loggedOut());
    }
}

export default authReducer;
