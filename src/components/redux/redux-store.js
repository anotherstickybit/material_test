import {applyMiddleware, combineReducers, createStore} from "redux";
import scheduleByClientReducer from "./scheduleByClientReducer";
import thunkMiddleware from "redux-thunk";
import authReducer from "./authReducer";
import {reducer as formReducer} from "redux-form"

let reducers = combineReducers({
    byClient: scheduleByClientReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;