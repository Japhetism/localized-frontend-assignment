import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Toast = (props) => {
    const { message } = props;  
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setOpen(false);
    };

    React.useEffect(() => {
        message ? setOpen(true) : setOpen(false)
    }, [props])

    return (
        <div className={classes.root}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert onClose={handleClose} severity="error">
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default Toast;
