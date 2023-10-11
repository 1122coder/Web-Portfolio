import { Box, Divider, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    Projects: {
        padding: '1rem',
        marginTop: '3rem'
    },
    boxes: {
        marginTop: '4rem'
    }
}))
export default function ProjectsDesc(){
    const classes= useStyles();
    return (
        <div className={classes.Projects}>
        <div className=''>
            <Divider sx={{
                  "&::before, &::after": {
                    borderColor: "primary.dark",
                  },
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: 'Black',
                  textTransform: 'uppercase',
                  letterSpacing: '0.22rem'
                }}
              >
                Our Success
          </Divider>
          </div>

        <div className={classes.boxes}>
            <Grid2 container spacing={2}>
                <Grid2 item xs={12} sm={12} md={6} lg={3}>
                    <Box 
                    sx={{
                        color: 'white',
                        boxShadow: 2,
                        width: '18rem',
                        height: '14rem',
                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#343434'),
                        p: 1,
                        m: 1,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        flexDirection: 'column',
                        fontSize: '0.875rem',
                        fontWeight: '700',
                    }}>
                        <Typography variant='h1'>10+</Typography> Projects Completed
                    </Box>
                </Grid2>
                <Grid2 item xs={12} sm={12} md={6} lg={3}>
                <Box
                    sx={{
                        color: 'white',
                        boxShadow: 2,
                        width: '18rem',
                        height: '14rem',
                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#343434'),
                        p: 1,
                        m: 1,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        flexDirection: 'column',
                        fontSize: '0.875rem',
                        fontWeight: '700',
                    }}
                    > <Typography variant='h1'>9+</Typography> Happy Clients</Box>
                </Grid2>
                <Grid2 item xs={12} sm={12} md={6} lg={3}>
                <Box
                    sx={{
                        color: 'white',
                        boxShadow: 2,
                        width: '18rem',
                        height: '14rem',
                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#343434'),
                        p: 1,
                        m: 1,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        flexDirection: 'column',
                        fontSize: '0.875rem',
                        fontWeight: '700',
                    }}
                    > <Typography variant='h1'>100%</Typography> Satisfcation</Box>
                </Grid2>
                <Grid2 item xs={12} sm={12} md={6} lg={3}>
                <Box
                    sx={{
                        boxShadow: 2,
                        color: 'white',
                        width: '18rem',
                        height: '14rem',
                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#343434'),
                        p: 1,
                        m: 1,
                        borderRadius: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        fontSize: '0.8843rem',
                        fontWeight: '700',
                    }}
                    > <Typography variant='h1'>30+</Typography> Articles delivered</Box>
                </Grid2>
            </Grid2>
            </div>
        </div>
    )
}
