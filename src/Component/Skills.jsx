import React from 'react';
import { Avatar, Grid, Paper } from '@mui/material';
import {makeStyles} from "@material-ui/core/styles";

import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import CV from '../Assets/icons3.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  skills : {
    marginTop:'100px',
    height: '50vh'

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: '2rem'
  },
}));
export default function Skills(){

  const classes = useStyles();
    return(
        <div className={classes.skills}>

          <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}><ModelTrainingIcon /> Machine Learning Classifiers</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}><Avatar
                        variant='rounded'
                        alt=""
                        src={CV}
                        sx={{ width: 56, height: 56 }}
                      />Computer Vision Models</Paper>
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