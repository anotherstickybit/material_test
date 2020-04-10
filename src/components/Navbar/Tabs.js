import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ByClient from "../ByClient/ByClient";
import ByCustomer from "../ByCustomer/ByCustomer";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import ByClientContainer from "../ByClient/ByClientContainer";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import LoginComponent from "./LoginComponent";

import Login from "./LoginComponent";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        backgroundColor: '#FE2E64',
    },
    get_button: {
        display: 'inline',
        width: 70
    },
    paper: {
        width: 'inherit',
        minHeight: '82vh',
        height: '100%',
        marginLeft: '-22px',
        marginRight: '-22px'
    },
    loginButton: {
        display: 'inline-block',
        marginTop: '9px',
        width: 90,
        height: 30,
        float: 'right',
        backgroundColor: '#2E3B55',
        '&:hover': {
            backgroundColor: '#475c85'
        },
    },
    toolBar: {
        minHeight: 36,
        width: "100%"
    },
    userNameTextField: {
        height: 15,
        width: 170
    },
    resize: {
        minHeight: 15,

    }

}));
const style = {
    flexGrow: 1,
    background: '#039be5'
};

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className={classes.root}>
            <AppBar style={style} position="static">
                <Toolbar className={classes.toolBar}>
                    <Grid
                        justify="space-between"
                        container
                        spacing={24}
                    >
                        <Grid item>
                            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                                <Tab label="By Client" {...a11yProps(0)} />
                                <Tab label="By Customer" {...a11yProps(1)} />
                            </Tabs>
                        </Grid>
                        <Grid item>

                            {/*<Button className={classes.loginButton} size={"small"} variant="contained"*/}
                            {/*        color="primary">Login</Button>*/}
                            <Login/>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Paper elevation={3} className={classes.paper}>
                    <ByClient/>
                </Paper>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Paper elevation={3} className={classes.paper}>
                    <ByCustomer/>
                </Paper>
            </TabPanel>
        </div>
    );
}