import React from "react";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

const Header = () => {

    const useStyles = makeStyles((theme) => ({
        header: {
            height: '70px',
            background: '#2E3B55'
        },
        h: {
          paddingLeft: '50px',
          paddingTop: '30px',
        }
    }));
    const classes = useStyles();

    return (
        <AppBar id={'header'} position={'static'} className={classes.header} elevation={0}>
            <Typography className={classes.h} variant="h5">
                DKSS Servers Backup Schedule Viewer
            </Typography>
        </AppBar>
    );
}

export default Header;