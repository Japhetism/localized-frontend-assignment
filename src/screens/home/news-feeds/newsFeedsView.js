import { makeStyles } from '@material-ui/core';
import React from 'react';
import Header from '../../../components/header';
import NewsFeedsWall from '../../../components/newsFeedsWall';

const NewsFeedsView = (props) => {
    const classes = useStyles();
    const { logout, newsFeedsData, isLoading, user } = props;
    
    return <div className={classes.root}>
        <Header logout={logout} />
        <NewsFeedsWall data={newsFeedsData} isLoading={isLoading} user={user} />
    </div>
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#F0F2F5',
    }
}));

export default NewsFeedsView;

