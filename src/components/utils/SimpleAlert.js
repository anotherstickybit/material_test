import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    alert: {
        display: 'inline-block',
        width: '690px',
        marginLeft: '25px',
        marginTop: '20px',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },

}));

const SimpleAlert = () => {
    const classes = useStyles();

    return (
        <div className={classes.alert}>
            <Alert severity="error">This functional available only for signed in users</Alert>
        </div>
    );
}

export default SimpleAlert;