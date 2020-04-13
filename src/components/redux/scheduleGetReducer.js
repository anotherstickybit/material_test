import {dataApi} from "../api/api";

const BY_CLIENT_GET = 'BY_CLIENT_GET'
const BY_CUSTOMER_GET = 'BY_CUSTOMER_GET'
const REQUEST_IN_PROGRESS = 'REQUEST_IN_PROGRESS'

let initialState = {
    data: [],
    newServerName: '',
    schedule: '',
    isRequestInProgress: false,
    scheduleByCustomer: '',
    newCustomerName: ''
};

const scheduleGetReducer = (state = initialState, action) => {
    switch (action.type) {
        case BY_CLIENT_GET:
            return {
                ...state,
                schedule: action.schedule,
                isRequestInProgress: action.isRequestInProgress
            };
        case BY_CUSTOMER_GET:
            return {
                ...state,
                scheduleByCustomer: action.schedule,
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

export const getByClient = (schedule, isRequestInProgress) => ({type: BY_CLIENT_GET, schedule, isRequestInProgress});
export const getByCustomer = (schedule) => ({type: BY_CUSTOMER_GET, schedule});
export const requestInProgressAction = (isRequestInProgress) => ({type: REQUEST_IN_PROGRESS, isRequestInProgress})

export const requestByClient = (client) => {
    return (dispatch) => {
        dataApi.getByClient(client).then(data => {
            dispatch(getByClient(data.client, false))
        })
    }
}

export const requestByCustomer = (customer) => {
    return (dispatch) => {
        dataApi.getByCustomer(customer).then(data => {
            dispatch(getByCustomer(data.customer));
        })
    }
}

export const requestInProgress = (is) => {
    return (dispatch) => {
        dispatch(requestInProgressAction(is));
    }
}

export default scheduleGetReducer;
