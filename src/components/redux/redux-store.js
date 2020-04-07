import {applyMiddleware, combineReducers, createStore} from "redux";
import scheduleByClientReducer from "./scheduleByClientReducer";
import thunkMiddleware from "redux-thunk";
import authReducer from "./authReducer";

let reducers = combineReducers({
    byClient: scheduleByClientReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;