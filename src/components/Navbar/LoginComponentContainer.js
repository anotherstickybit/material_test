import {compose} from "redux";
import {connect} from "react-redux";
import {authenticateUser, updatePassword, updateUserName} from "../redux/authReducer";
import LoginComponent from "./LoginComponent";

let mapStateToProps = (state) => {
    return {
        userState: state.auth,
    }
}

export default compose(connect(mapStateToProps, {authenticateUser, updateUserName, updatePassword})(LoginComponent));