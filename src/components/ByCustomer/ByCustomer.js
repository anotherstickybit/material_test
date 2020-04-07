import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import s from '../../App.css'
import {makeStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";

const ByCustomer = () => {

    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        getButton: {
            display: 'inline',
            marginLeft: '20px',
            marginTop: '20px',
            backgroundColor: '#039be5',
            '&:hover': {
                backgroundColor: '#0277bd'
            },
            width: 165
        },
        createPdfButton: {
            display: 'inline',
            marginLeft: '10px',
            marginTop: '20px',
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

    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const Customers = [
        'Hartmann',
        'DK-PROD',
        'Halsnaes'
    ]

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel className={classes.marginForSelectAndInput} id="demo-simple-select-label">Customer</InputLabel>
                <Select className={classes.marginForSelectAndInput}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                > {Customers.map(cust => {
                    return <MenuItem value={cust}>{cust}</MenuItem>
                })}

                </Select>

            </FormControl>
            <Button className={classes.getButton} variant="contained" color="primary">Get Schedule</Button>
            <Button className={classes.createPdfButton} disabled={true} variant="contained" color="primary">Create PDF</Button>

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


export default ByCustomer;