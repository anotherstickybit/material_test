import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import * as axios from "axios";
import {updatePassword, updateUserName} from "../redux/authReducer";

const useStyles = makeStyles((theme) => ({
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
        // backgroundColor: '#2E3B55',
        // '&:hover': {
        //     backgroundColor: '#475c85'
        // },
    },
    textField: {
        margin: 2
    },
    loginButton: {
        marginTop: '10px',
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

    const sendRequest = () => {
        // axios.post(`http://127.0.0.1:8000/auth/jwt/create/`,  {
        //         'username': 'admin',
        //         'password': 'administrator123'
        // }).then(response => {
        //
        // })
        alert(props.userState.username)
    }

    let onUserNameChange = (e) => {
        let body = e.target.value;
        props.updateUserName(body);
    }

    let onUserPasswordChange = (e) => {
        let body = e.target.value;
        props.updatePassword(body);
    }

    let onAuth = () => {
        props.authenticateUser(props.userState.username, props.userState.password);
    }

    return (
        <div>
            {/*{ state.isAuth  ? 'Welcome'  }*/}
            <Button className={classes.openPopupButton} color="secondary" aria-describedby={id} size={"small"}
                    variant="contained"
                    onClick={handleClick}>
                Login
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
                    <div>
                        <TextField className={classes.textField} onChange={onUserNameChange} id="standard-basic"
                                   label="Username" required={true}/>
                    </div>
                    <div>
                        <TextField className={classes.textField} onChange={onUserPasswordChange} type="password"
                                   id="standard-basic" label="Password" required={true}/>
                    </div>
                    <div>
                        <Button className={classes.loginButton}
                                onClick={onAuth}
                                aria-describedby={id}
                                size={"small"} variant="contained">Submit</Button>
                    </div>
                </Typography>
            </Popover>

        </div>
    );
}

export default LoginComponent;