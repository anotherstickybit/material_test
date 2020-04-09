import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import * as axios from "axios";
import {authenticateUser, logout, onRefreshCheckIfAuth, updatePassword, updateUserName} from "../redux/authReducer";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {render} from "react-dom";
import LogoutPopover from "./LogoutPopover";
import validate from '../validators/ValidateLoginTextField';

export const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
    openPopupButton: {
        display: 'inline-block',
        marginTop: '9px',
        color: 'white',
        width: 90,
        height: 30,
        float: 'right',
    },
    textField: {
        margin: 4,
    },
    loginButton: {
        marginTop: '10px',
        marginLeft: '4px',
        color: 'white',
        backgroundColor: '#2E3B55',
        '&:hover': {
            backgroundColor: '#475c85'
        },
    },
    popover: {
        marginTop: 5
    }
}));

const LoginComponent = (props) => {

    let state = props.userState;

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    let onAuth = () => {
        props.authenticateUser(props.userState.username, props.userState.password);
    }

    const renderTextField = ({
                                 label,
                                 input,
                                 meta: {touched, invalid, error},
                                 ...custom
                             }) => (
        <TextField
            label={label}
            placeholder={label}
            error={touched && invalid}
            helperText={touched && error}
            {...input}
            {...custom}
            variant="outlined"
            size="small"
            className={classes.textField}
        />
    )
    return (
        <div>
            {/*{ state.isAuth  ? 'Welcome'  }*/}
            <Button className={classes.openPopupButton} color="secondary" aria-describedby={id} size={"small"}
                    variant="contained"
                    onClick={handleClick}>
                Sign in
            </Button>
            <Popover
                id={id}
                open={open}
                className={classes.popover}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <Typography className={classes.typography}>
                    <form onSubmit={props.handleSubmit}>
                        <div>
                            <Field name="username" component={renderTextField} label="User Name" autoFocus/>
                        </div>
                        <div>
                            <Field name="password" component={renderTextField} label="Password" type={'password'}/>
                        </div>
                        <div>
                            <Button className={classes.loginButton}
                                    aria-describedby={id}
                                    size={"small"} variant="contained" type={'submit'}>Submit</Button>
                        </div>
                    </form>
                </Typography>
            </Popover>

        </div>
    );
}

const LoginReduxForm = reduxForm({form: 'login', validate})(LoginComponent);

class Login extends React.Component {


    componentDidMount() {
        if (localStorage.getItem('access-jwt')) {
            this.props.onRefreshCheckIfAuth(localStorage.getItem('access-jwt'));
        }
    }

    onSubmit(formData) {
        this.props.authenticateUser(formData.username, formData.password);
    }

    render() {
        if (this.props.userState.isAuth) {
            return (
                <LogoutPopover username={this.props.userState.username} logout={this.props.logout}/>
            )
        }
        return (
            <LoginReduxForm onSubmit={this.onSubmit.bind(this)}/>
        );
    }
}

const mapStateToProps = (state) => ({
    userState: state.auth,
})

export default connect(mapStateToProps, {authenticateUser, onRefreshCheckIfAuth, logout})(Login);