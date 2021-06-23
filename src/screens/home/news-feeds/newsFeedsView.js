import { makeStyles } from '@material-ui/core';
import React from 'react';
import Header from '../../../components/header';
import NewsFeedsWall from '../../../components/newsFeedsWall';

const NewsFeedsView = (props) => {
    const classes = useStyles();
    const { logout, newsFeedsData, isLoading, user, getNewsFeeds } = props;
    
    return <div className={classes.root}>
        <Header logout={logout} />
        <NewsFeedsWall data={newsFeedsData} isLoading={isLoading} user={user} getNewsFeeds={getNewsFeeds} />
    </div>
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#F0F2F5',
        paddingTop: "50px"
    }
}));

export default NewsFeedsView;

