import {applyMiddleware, combineReducers, createStore} from "redux";
import scheduleGetReducer from "./scheduleGetReducer";
import thunkMiddleware from "redux-thunk";
import authReducer from "./authReducer";
import {reducer as formReducer} from "redux-form"

let reducers = combineReducers({
    byClient: scheduleGetReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;