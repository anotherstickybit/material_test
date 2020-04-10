import React from "react";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import Login from "../Navbar/LoginComponent";
import validate from "../validators/ValidateByClientTextField"
import Typography from "@material-ui/core/Typography";
import {createMuiTheme} from "@material-ui/core";
import {blue} from '@material-ui/core/colors';
import {ThemeProvider} from "@material-ui/styles";
import {requestByClient} from "../redux/scheduleByClientReducer";



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '30ch',
        },
    },
    get_button: {
        display: 'inline',
        verticalAlign: 'middle',
        marginTop: '20px',
        marginLeft: '50px',
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
        display: 'inline-block',
        marginLeft: '40px',
        marginTop: '20px',

    },
    typography: {
        display: 'inline-block',
        marginLeft: '40px',
        marginTop: '20px',
    },
    cssFocused: {
        color: 'green'
    },
}));


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
    />

)

const ByClientComponent = (props) => {

    const theme = createMuiTheme({
        palette: {
            primary: blue,
        },
    });

    const classes = useStyles();
    return (
        <div>
            <div>
                <form onSubmit={props.handleSubmit}>
                    <Typography variant="h6" gutterBottom className={classes.typography}>
                        Explanation
                    </Typography>
                    <div>
                        <ThemeProvider theme={theme}>
                            <Field name="client" component={renderTextField} label={'Server Name'}
                                   className={classes.textField}/>
                        </ThemeProvider>
                        <Button className={classes.get_button} variant="contained"
                                color="primary" type={'submit'}>Get Schedule</Button>
                    </div>
                    <CircularProgress mode="indeterminate" classes={{root: classes.progress}}/>
                </form>
                <div>
                    { props.newServerName }
                </div>
            </div>
        </div>
    );
}

const ByClientReduxForm = reduxForm({form: 'byClient', validate})(ByClientComponent)

class ByClient extends React.Component {

    onSubmit(formData) {
        this.props.requestByClient(formData.client)
    }

    render() {
        return (
            <ByClientReduxForm onSubmit={this.onSubmit.bind(this)} newServerName={this.props.byClientPage.newServerName}/>
        );
    }
}

const mapStateToProps = (state) => ({
    byClientPage: state.byClient,
})

export default connect(mapStateToProps, {requestByClient})(ByClient);