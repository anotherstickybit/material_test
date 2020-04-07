import {dataApi} from "../api/api";

const BY_CLIENT_GET = 'BY_CLIENT_GET'
const SET_DATA = 'SET_DATA'

let initialState = {
    data: [

    ],
    newServerName: '',
};

const scheduleByClientReducer = (state = initialState, action) => {
    switch (action.type) {
        case BY_CLIENT_GET:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SET_DATA:
            return {
                ...state,
                data: action.data
            }
        default:
            return state;
    }
}

export const updateNewServerNameCreator = (body) => ({type: BY_CLIENT_GET, body});
export const setData = (data) => ({type: SET_DATA, data});

export const getInfo = (serverName) => {
    return (dispatch) => {
        dataApi.getAllQuestions().then(data => {
            dispatch(setData(data));
        })
    }
}

export default scheduleByClientReducer;
