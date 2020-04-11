import {dataApi} from "../api/api";

const BY_CLIENT_GET = 'BY_CLIENT_GET'
const REQUEST_IN_PROGRESS = 'REQUEST_IN_PROGRESS'

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
                newServerName: action.client,
                isRequestInProgress: action.isRequestInProgress
            };
        case REQUEST_IN_PROGRESS:
            return {
                ...state,
                isRequestInProgress: action.isRequestInProgress
            };
        default:
            return state;
    }
}

export const getByClient = (client, isRequestInProgress) => ({type: BY_CLIENT_GET, client, isRequestInProgress});
export const requestInProgressAction = (isRequestInProgress) => ({type: REQUEST_IN_PROGRESS, isRequestInProgress})

export const requestByClient = (client) => {
    return (dispatch) => {
        dataApi.getByClient(client).then(data => {
            dispatch(getByClient(data.client, false))
        })
    }
}

export const requestInProgress = (is) => {
    return (dispatch) => {
        dispatch(requestInProgressAction(is));
    }
}

export default scheduleByClientReducer;
