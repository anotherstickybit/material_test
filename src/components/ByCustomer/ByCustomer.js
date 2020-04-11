import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import s from '../../App.css'
import {makeStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Autocomplete from '@material-ui/lab/Autocomplete';
import Customers from "./CustomersArray";
import TextField from "@material-ui/core/TextField";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import validate from "../validators/ValidateByCustomerAutocomplete"
import {createMuiTheme} from "@material-ui/core";
import {blue} from "@material-ui/core/colors";
import {ThemeProvider} from "@material-ui/styles";
import SimpleAlert from "../utils/SimpleAlert";


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    autocomplete: {
        marginTop: 26,
        marginLeft: 20,
    },
    getButton: {
        display: 'inline',
        marginLeft: '20px',
        marginTop: '35px',
        backgroundColor: '#039be5',
        '&:hover': {
            backgroundColor: '#0277bd'
        },
        width: 165
    },
    createPdfButton: {
        display: 'inline',
        marginLeft: '10px',
        marginTop: '35px',
        backgroundColor: '#039be5',
        '&:hover': {
            backgroundColor: '#0277bd'
        },
        width: 165
    },
    marginForSelectAndInput: {
        marginLeft: '20px'
    }
}));

const renderAutocomplete = ({
                                label,
                                input,
                                meta: {touched, invalid, error},
                                ...custom
                            }) => (
    <Autocomplete
        id="combo-box-demo"
        size={'small'}
        options={Customers}
        getOptionLabel={(option) => option.title}
        style={{width: 300}}
        error={touched && invalid}
        helperText={touched && error}
        {...custom}
        onChange={(event, value) => input.onChange(value)}
        renderInput={(params) => <TextField {...params} label="Select Customer" variant="outlined"/>}
    />
)

const ByCustomerComponent = (props) => {

    const theme = createMuiTheme({
        palette: {
            primary: blue,
        },
    });
    const classes = useStyles();
    return (
        <div>
            { !props.isAuth && <SimpleAlert /> }
            <form onSubmit={props.handleSubmit}>
                <FormControl className={classes.formControl}>
                    <ThemeProvider theme={theme}>
                        <Field name={'autocomplete'} required={true} className={classes.autocomplete}
                               component={renderAutocomplete}/>
                    </ThemeProvider>
                </FormControl>
                <Button className={classes.getButton} variant="contained" type={'submit'} color="primary">Get
                    Schedule</Button>
                <Button className={classes.createPdfButton} disabled={true} variant="contained" color="primary">Create
                    PDF</Button>
            </form>
            <div>
                <p>Data</p>
                <p>Data</p>
                <p>Data</p>
                <p>Data</p>
                <p>Data</p>
                <p>Data</p>
                <p>Data</p>
            </div>
        </div>
    );
}
const ByCustomerReduxForm = reduxForm({form: 'byCustomer', validate})(ByCustomerComponent)

class ByCustomer extends React.Component {

    onSubmit(formData) {
        console.log(formData.autocomplete)
    }

    render() {
        return (
            <ByCustomerReduxForm onSubmit={this.onSubmit.bind(this)} isAuth={this.props.authorization.isAuth}/>
        );

    }
}

const mapStateToProps = (state) => ({
    authorization: state.auth,
})

export default connect(mapStateToProps, {})(ByCustomer);