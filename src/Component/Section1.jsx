import React from 'react';
import Grid from '@material-ui/core/Grid';
import Mian from "../Assets/main.jpg";

import '../Style/MainPage.css';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: 'linear-gradient(45deg, #874da2 0%, #c43a30 100%)', // Adjust the background color as needed
      borderRadius: theme.spacing(1),
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add a shadow effect
      height: '100vh',
      padding: '50px'
    },
    textContainer: {
      flex: 1,
    },
    text: {
      marginBottom: theme.spacing(2),
      color: '#65FDF0',
      fontSize: '1.1rem'

    },
    welcome: {
        marginBottom: theme.spacing(2),
        fontSize: '3.67rem',
        color: '#65FDF0',
        fontWeight: 900
        
      },
    floatingImage: {
      position: 'relative',
      animation: '$float 4s ease-in-out infinite',
      backgroundColor: 'transparent',
      paddingLeft: '3rem'
    },
    '@keyframes float': {
      '0%, 100%': {
        transform: 'translateY(0)',
      },
      '50%': {
        transform: 'translateY(-20px)', // Adjust this value to control the float height
      },
    },
    image: {
      width: '100%',
      height: 'auto',
      maskImage: 'linear-gradient(45deg, #874da2 0%, #c43a30 100%)'
    },
  }));

export default function MainPage() {
    const classes = useStyles();

    return (
        <>
        <div className='Main-Page'>
        <div className={classes.container}>
            <Grid container spacing={2}>
                <Grid xsm={12} sm={11} md={6}>
                <div className={classes.textContainer}>
                    <h3 className={classes.welcome}>Welcome to<span style={{
                        background: `-webkit-linear-gradient(to top, #4481eb, #04befe)`,
                        WebkitBackgroundClip: 'text',
                        color: '#0504aa',
                        display: 'inline-block',
                        fontWeight: 'bold',
                        
                    }}>AIpreneur website</span></h3>
                    <p className={classes.text}>
                    Describe your AI/ML services or any other information you want to display on the left side.
                    </p>
                </div>
                </Grid>
                <Grid xs={12} sm={11} md={4}>
                    <div className={classes.floatingImage}>
                        <img
                        src={Mian} // Replace with the URL of your image
                        alt="Main"
                        className={`${classes.image} enlarged-image`}
                        />
                    </div>
                </Grid>
        </Grid>
        </div>

        </div>
        </>
    )
}
