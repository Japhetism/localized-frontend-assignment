import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import NewsFeed from './newsFeed';
import NavLinks from './navLinks';
import SideBar from './sideBar';
import AdditionalInfo from './additionInfo';

const NewsFeedsWall = (props) => {
  const classes = useStyles();
  const { data, isLoading } = props;
    
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
         <SideBar>
           <NavLinks />
         </SideBar>
        </Grid>
        <Grid item xs={6} sm={6}>
            {!isLoading &&  data && data.responseData.map((res, index) => <NewsFeed data={res} key={`${res.id}${index}`} /> )}
        </Grid>
        <Grid item xs={6} sm={3}>
          <SideBar>
            <AdditionalInfo />
          </SideBar>
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