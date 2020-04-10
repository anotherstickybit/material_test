import {dataApi} from "../api/api";

const BY_CLIENT_GET = 'BY_CLIENT_GET'
const SET_DATA = 'SET_DATA'

let initialState = {
    data: [],
    newServerName: '',
    schedule: '',
    isRequestInProgress: false
};

const scheduleByClientReducer = (state = initialState, action) => {
    switch (action.type) {
        case BY_CLIENT_GET:
            return {
                ...state,
                newServerName: action.client
            };
        default:
            return state;
    }
}

export const getByClient = (client) => ({type: BY_CLIENT_GET, client});

export const requestByClient = (client) => {
    return (dispatch) => {
        dataApi.getByClient(client).then(data => {
            dispatch(getByClient(data.client))
        })
    }
}

export default scheduleByClientReducer;
