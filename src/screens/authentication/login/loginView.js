import React from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import LoginForm from './components/login-form';

const LoginView = (props) => {
    
    const classes = useStyles();

    return <React.Fragment>
    <Container maxWidth="xl" className={classes.root}>
        <Box display="flex">
            <Box p={10}>
                <Typography variant="h4" component="h4" className={classes.headerTitle}>
                    2Konnect
                </Typography>
                <Typography variant="body1" component="span" className={classes.headerDescription}>
                    2Konnect helps you connect and share with the people in your life.
                </Typography>
            </Box>
            <Box p={10}>
                <LoginForm {...props} />
            </Box>
        </Box>
  </Container>
  <Container maxWidth="xl" className={classes.footer}>
      <Typography>2Konnect &copy; 2021</Typography>
  </Container>
  </React.Fragment>
}

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#F0F2F5',
        height: '100vh',
        paddingTop: "10vh"
    },
    headerTitle: {
        color: '#1877F2',
        fontWeight: "bold",
        fontSize: "40px"
    },
    headerDescription: {
        fontFamily: "SFProDisplay-Regular, Helvetica, Arial, sans-serif",
        fontSize: "20px",
        fontWeight: "normal",
        lineHeight: "32px",
        width: "500px"
    },
    footer: {
        padding: '20px 0px 20px 40px',
        color: '#737373',
        fontSize: '10px'
    }
}))

export default LoginView;