import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { red } from '@material-ui/core/colors';
import {Redirect} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
        margin: 5,
        marginRight: 15
    },
    popover: {
        marginTop: 5
    },
    userButton: {
        display: 'inline-block',
        marginTop: '-5px',
        color: 'white',
        width: "auto",
        height: 50,
        float: 'right',
    },
    logoutButton: {
        marginTop: '10px',
        color: 'white',
        backgroundColor: '#2E3B55',
        '&:hover': {
            backgroundColor: '#475c85'
        },
    },
}));

const LogoutPopover = (props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logoutUser = () => {
        props.logout();
        localStorage.removeItem('access-jwt');
    }

    const redirectToAdmin = () => {
        return <Redirect to={'http://127.0.0.1:8001/admin'} />
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <IconButton className={classes.userButton} size={"medium"} color="secondary" aria-label="user settings" onClick={handleClick}>
                <AccountCircleIcon color={"secondary"} fontSize={"large"} />
            </IconButton>
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
                    <Typography variant="h6" gutterBottom>
                        <div>{props.username}</div>
                    </Typography>
                    <div>
                    { props.isStaff === true && <Button className={classes.logoutButton}
                                                            aria-describedby={id} size={"small"}
                                                            variant="contained" color="secondary" onClick={()=> window.open("http://172.26.100.55:8001/admin/", "_blank")}>Admin Page</Button> }
                    </div>
                    <Button className={classes.logoutButton}
                            aria-describedby={id} size={"small"}
                            variant="contained" color="secondary" onClick={logoutUser}>Logout</Button>
                </Typography>
            </Popover>
        </div>
    );
}

export default LogoutPopover;