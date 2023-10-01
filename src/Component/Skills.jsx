import React from 'react';
import {Divider, Grid, Paper, useMediaQuery } from '@mui/material';
import {makeStyles} from "@material-ui/core/styles";


import { useTheme } from '@emotion/react';
import { hover } from '@testing-library/user-event/dist/hover';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '20px '
  },
  skills : {
    marginTop:'100px',
    height: '50vh',
    backgroundColor: '#212121',
    padding: '10px'

  },
  skillsSmallScreen: {
    // Change the height for smaller screens
    height: '100vh',
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    height: '100%', // Set a fixed height for equal size
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Center content vertically
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    cursor: 'pointer',
    fontSize:'1.33rem',
    fontWeight: '500',
    margin:'5px',
    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,119,88,0.9500175070028011) 0%, rgba(0,212,255,1) 100%, rgba(245,0,0,1) 100%)',
    transition: 'background-color 1s ease',
    
    '&:hover' :{
      //background: 'rgb(2,0,36)',
      color: 'white',
      background: 'linear-gradient(90deg, rgba(2,0,36,1) 100%, rgba(0,80,119,0.9752275910364145) 100%, rgba(0,212,255,1) 100%, rgba(119,0,245,1) 100%)',
    }
  },
  services: {
    margin: '20px'
  }
}));
export default function Skills(){

  const classes = useStyles();
  
  // Use useMediaQuery to check if the screen is small
  const isSmallScreen = useMediaQuery('(max-width:600px)');
    return(
        <div className={`${classes.skills} ${isSmallScreen && classes.skillsSmallScreen}`}>
          <div className={classes.services}>
            <Divider sx={{
                  "&::before, &::after": {
                    borderColor: "primary.light",
                  },
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: 'white',
                  textTransform: 'uppercase',
                  letterSpacing: '0.22rem'
                }}
              >
                Our Services
          </Divider>
          </div>

          <div className={classes.root}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper className={classes.paper}>Machine Learning Classifiers</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper className={classes.paper}>Computer Vision Models</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper className={classes.paper}>AI Chat Bots</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper className={classes.paper}>Tech Writing</Paper>
                </Grid>
              </Grid>
    </div>
        </div>
    )
}