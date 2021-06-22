import React from 'react';
import { 
    FormHelperText, TextField, InputAdornment, 
    IconButton, Button, makeStyles, Container 
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Loader from '../../../../components/loader';

const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Please enter a valid email address')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .required('Password is required')
});

const LoginForm  = (props) => {
    const { handleFormSubmit, isLoading } = props; 

    const classes = useStyles();
    const [showPassword, setShowPassword] = React.useState(false);

    const formik = useFormik({
        initialValues: {
          email: '',
          password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            handleFormSubmit(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Container maxWidth="xl" className={classes.root}>
            <form onSubmit={formik.handleSubmit} className={classes.form}>
                <div className={classes.input}>
                    <TextField
                        fullWidth
                        id="outlined-error-helper-email"
                        name="email"
                        variant="outlined"
                        label="Email Address"
                        defaultValue={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        disabled={isLoading}
                    />
                    <FormHelperText className="MuiFormHelperText-root Mui-error">{formik.touched.email && formik.errors.email}</FormHelperText>
                </div>
                <div>
                    <TextField
                        fullWidth
                        id="outlined-error-helper-password"
                        variant="outlined"
                        name="password"
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        disabled={isLoading}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowPassword(!showPassword)}
                                    onMouseDown={(event) => event.preventDefault()}
                                    edge="end"
                                    >
                                    {!showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        defaultValue={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                    />
                    <FormHelperText className="MuiFormHelperText-root Mui-error">{formik.touched.password && formik.errors.password}</FormHelperText>
                </div>
                <Button fullWidth variant="contained" disabled={isLoading} size="large" type="submit" className={classes.button}>
                    {!isLoading ? "Log In" : <Loader color="inherit" size={20} />}
                </Button>
            </form>
        </Container>
    );
}

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#FFFFFF',
        width: '150%',
        borderRadius: '3%',
        boxShadow: '5px 5px 5px #aaaaaa'
    },
    form: {
        width: '100%',
        paddingTop: '5%',
        paddingBottom: '10%'
    },
    input: {
        marginBottom: '5%'
    },
    button: {
        backgroundColor: '#1877F2',
        color: '#FFFFFF',
        marginBottom: '10%',
        marginTop: '5%',
        lineHeight: '30px',
        fontWeight: 'bold',
        fontSize: '20px',
        '&:hover': {
            backgroundColor: '#1877F2',
            color: '#FFFFFF',
        }
    }
}));

export default LoginForm;