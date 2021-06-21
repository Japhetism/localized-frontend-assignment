import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NewsFeed from './newsFeed';
import SideMenu from './side-menu';

const NewsFeedsWall = (props) => {
    const classes = useStyles();
    const { data, isLoading } = props;

    
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
         <SideMenu />
        </Grid>
        <Grid item xs={6} sm={6}>
            {!isLoading &&  data && data.responseData.map((res, index) => <NewsFeed data={res} key={`${res.id}${index}`} /> )}
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: '2%',
      backgroundColor: '#F0F2F5',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));
  
  

export default NewsFeedsWall;