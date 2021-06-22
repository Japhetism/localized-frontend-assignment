import React from 'react';
import { Container, makeStyles, Grid, Typography, useMediaQuery } from '@material-ui/core';
import LoginForm from './components/login-form';

const LoginView = (props) => {
    const desktopDevice = useMediaQuery('(min-width:600px)');

    const classes = useStyles();

    return <React.Fragment>
        <Container maxWidth="xl" className={classes.root}>
            <Grid container spacing={3}>
                <Grid item lg={7} md={7} sm={12} xs={12}>
                    <Typography variant="h4" component="h4" className={classes.headerTitle}>
                        Konnect
                    </Typography>
                    {desktopDevice && <Typography variant="body1" component="span" className={classes.headerDescription}>
                        Konnect helps you connect and share with the people in your life.
                    </Typography>}
                </Grid>
                <Grid item lg={5} md={5} sm={12} xs={12}>
                    <LoginForm {...props} />
                </Grid>
            </Grid>
        </Container>
        <Container maxWidth="xl" className={classes.footer}>
            <Typography>Konnect &copy; 2021</Typography>
        </Container>
    </React.Fragment>
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#F0F2F5',
        height: '100vh',
        padding: "30vh 30vh 0vh 30vh",
        [theme.breakpoints.down('sm')]: {
            padding: "10vh 2vh 0vh 2vh",
        },
    },
    headerTitle: {
        color: '#1877F2',
        fontWeight: "bold",
        fontSize: "40px",
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        },
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