import React from 'react';

// import { Container } from './styles';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    HelloStyle: {
        fontStyle: 'oblique',
    },
});

export default function FirstContact() {
    const classes = useStyles();
    return (
        <Typography className={classes.HelloStyle} variant="h1" color="primary">
            Hello There
        </Typography>
    );
}
