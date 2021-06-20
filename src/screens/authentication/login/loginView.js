import React from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import LoginForm from './components/login-form';

const LoginView = () => {
    
    const classes = useStyles();

    return <Container maxWidth="xl" className={classes.root}>
        <Box display="flex">
            <Box p={10}>
                <Typography variant="h4" component="h4" className={classes.headerTitle}>
                    Facebook
                </Typography>
                <Typography variant="body1" component="span" className={classes.headerDescription}>
                    Facebook helps you connect and share with the people in your life.
                </Typography>
            </Box>
            <Box p={10}>
                <LoginForm />
            </Box>
        </Box>
  </Container>
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
    }
}))

export default LoginView;