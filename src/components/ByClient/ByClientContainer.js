import {getInfo, updateNewServerNameCreator} from "../redux/scheduleByClientReducer";
import {compose} from "redux";
import {connect} from "react-redux";
import ByClient from "./ByClient";

let mapStateToProps = (state) => {
    return {
        byClientPage: state.byClient,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewServerNameCreator: (body) => {
            dispatch(updateNewServerNameCreator(body));
        },
    }
}

export default compose(
    connect(mapStateToProps, {getInfo, updateNewServerNameCreator}))(ByClient)
