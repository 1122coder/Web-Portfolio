import { Typography, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    Footer: {
        textAlign: 'center',
        padding: '20px',
        backgroundColor : '#424d56',
        color: 'white'
        
    },
}))

export default function Footer(){
    const classes = useStyles();
    return (
        <div className={classes.Footer}>
            <Typography>Author: Kashif Saeed</Typography>
            <Typography>Contact us: abcd.tccinfo@gmail.com</Typography>
            <Typography>Telegram: fishak-kilam</Typography>

        </div>
    )
}