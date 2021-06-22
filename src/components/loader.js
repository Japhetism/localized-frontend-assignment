import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = (props) => {
    const classes = useStyles();
    const { color, size } = props;
    return (
        <div className={classes.root}>
            <CircularProgress color={color} size={size} />
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

export default Loader;
