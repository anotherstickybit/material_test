import React from "react";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const ByClient = (props) => {

    const useStyles = makeStyles((theme) => ({
        root: {

            '& > *': {
                margin: theme.spacing(1),
                width: '30ch',
            },
        },
        get_button: {
            display: 'inline',
            marginTop: '20px',
            backgroundColor: '#039be5',
            '&:hover': {
                backgroundColor: '#0277bd'
            },
            width: 165
        },
        progress: {
            display: 'none',
            color: '#039be5',
            margin: 20,
            width: 20
        },
        textField: {
            marginLeft: '20px'
        }
    }));

    const classes = useStyles();


    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField className={classes.textField} id="standard-basic" label="Server Name"/>
                <Button classes={{root: classes.get_button}} onClick={props.getInfo} variant="contained" color="primary">Get Schedule</Button>
                <CircularProgress mode="indeterminate" classes={{root: classes.progress}}/>
                <div>
                    { props.byClientPage.data.length !== 0 ? props.byClientPage.data.data.map(q => {
                        return <div>
                            <p><b>{q.title}</b></p>
                            <p>{q.question}</p>
                        </div>
                    }) : <p>empty</p>}
                    <p>DATA</p>
                    <p>DATA</p>
                    <p>DATA</p>
                    <p>DATA</p>
                    <p>DATA</p>
                    <p>DATA</p>
                    <p>DATA</p>
                    <p>DATA</p>
                    <p>DATA</p>
                    <p>DATA</p>
                    <p>DATA</p>
                    <p>DATA</p>
                    <p>DATA</p>
                    <p>DATA</p>
                    <p>DATA</p>
                    <p>DATA</p>
                    <p>DATA</p>
                    <p>DATA</p>
                    <p>DATA</p>
                    <p>DATA</p>
                    <p>DATA</p>
                    <p>DATA</p>
                    <p>DATA</p>
                    <p>DATA</p>
                    <p>DATA</p>
                    <p>DATA</p>
                    <p>DATA</p>
                    <p>DATA</p>

                </div>
            </form>
        </div>
    );
}

export default ByClient;