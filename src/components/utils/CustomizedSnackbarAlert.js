import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function CustomizedSnackbarAlert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
        },

    },
    alert: {
        marginTop: 600
    }
}));

const CustomizedSnackbar = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(props.open);


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Snackbar anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }} open={open} autoHideDuration={6000} onClose={handleClose}>
                <CustomizedSnackbarAlert onClose={handleClose} severity={props.severity}>
                    {props.alertText}
                </CustomizedSnackbarAlert>
            </Snackbar>
        </div>
    );
}

export default CustomizedSnackbar;