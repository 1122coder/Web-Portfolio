import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
 root: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f00999',

},
 menuButton: {
    marginRight: theme.spacing(2),
 },
 title: {
    flexGrow: 1,
    textAlign: 'center',
    fontSize: '2.134rem',
    fontWeight:'400',
 },
}));

function Header() {
 const classes = useStyles();

 return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            AIpreneur
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
 );
}

export default Header;
