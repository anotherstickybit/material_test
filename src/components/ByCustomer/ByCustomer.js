import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import s from '../../App.css'
import {makeStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Autocomplete from '@material-ui/lab/Autocomplete';
import Customers, {getCustomersForAccount} from "./CustomersArray";
import TextField from "@material-ui/core/TextField";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import validate from "../validators/ValidateByCustomerAutocomplete"
import {createMuiTheme} from "@material-ui/core";
import {blue} from "@material-ui/core/colors";
import {ThemeProvider} from "@material-ui/styles";
import SimpleAlert from "../utils/SimpleAlert";
import {requestByCustomer, requestInProgress} from "../redux/scheduleGetReducer";
import CircularProgress from "@material-ui/core/CircularProgress";


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
        display: 'inline-block',
        marginLeft: '550px',
        marginTop: '-84px',
        backgroundColor: '#039be5',
        '&:hover': {
            backgroundColor: '#0277bd'
        },
        width: 165
    },
    marginForSelectAndInput: {
        marginLeft: '20px'
    },
    outputStyle: {
        marginLeft: '40px',
        marginTop: '20px',
        marginBottom: '20px',
    },
    progress: {
        display: 'inline-block',
        color: '#039be5',
        margin: 0,
        marginLeft: '40px',
        marginTop: '35px',
        width: 20
    },
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

    const createPDF = () => {
        let sTable = document.getElementById('contents');
        if(sTable.innerHTML === "") return
        let nTable = sTable.cloneNode(true);
        nTable.removeChild(nTable.firstChild);
        let sTableInner = nTable.innerHTML;

        let style = "<style>";
        style = style + "table {width: 100%;font: 17px Calibri;}";
        style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
        style = style + "padding: 2px 3px;text-align: center;}";
        style = style + "</style>";


        let win = window.open('', '', 'height=700,width=700');

        win.document.write('<html><head>');
        win.document.write('<title>Schedules</title>');
        win.document.write(style);
        win.document.write('</head>');
        win.document.write('<body>');
        win.document.write(sTableInner);
        win.document.write('</body></html>');

        win.document.close();

        win.print();
    }

    return (
        <div>
            { !props.isAuth && <SimpleAlert /> }
            <form onSubmit={props.handleSubmit}>

                <FormControl className={classes.formControl}>
                    <ThemeProvider theme={theme}>
                        <Field name={'autocomplete'} required={true} className={classes.autocomplete}
                               component={renderAutocomplete} options={getCustomersForAccount(props.allowedCustomers)}
                               disabled={!props.isAuth}/>
                    </ThemeProvider>
                </FormControl>

                { props.isRequestInProgress ? <CircularProgress mode="indeterminate" classes={{root: classes.progress}}/>
                    :
                    <Button className={classes.getButton} disabled={!props.isAuth} variant="contained" type={'submit'}
                            color="primary">Get
                        Schedule</Button>
                }
                <div>
                <Button className={classes.createPdfButton} disabled={!props.isAuth} onClick={createPDF} variant="contained" color="primary">Create
                    PDF</Button>
                </div>
            </form>
            { props.isAuth && <div id={'contents'} className={classes.outputStyle} dangerouslySetInnerHTML={{__html: props.schedule}}/> }
        </div>
    );
}
const ByCustomerReduxForm = reduxForm({form: 'byCustomer', validate})(ByCustomerComponent)

class ByCustomer extends React.Component {

    onSubmit(formData) {
        this.props.requestInProgress(true);
        this.props.requestByCustomer(formData.autocomplete.val);
    }

    render() {
        return (
            <ByCustomerReduxForm onSubmit={this.onSubmit.bind(this)} isAuth={this.props.authorization.isAuth}
                                 allowedCustomers={this.props.authorization.allowedCustomers}
                                 schedule={this.props.byCustomer.scheduleByCustomer}
                                 isRequestInProgress={this.props.byCustomer.isRequestInProgress}/>
        );

    }
}

const mapStateToProps = (state) => ({
    authorization: state.auth,
    byCustomer: state.byClient,
})

export default connect(mapStateToProps, {requestByCustomer, requestInProgress})(ByCustomer);