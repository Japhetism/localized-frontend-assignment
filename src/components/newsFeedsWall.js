import React from 'react';
import { makeStyles, Grid, useMediaQuery } from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroll-component';
import AdSense from 'react-adsense';
import NewsFeed from './newsFeed';
import NavLinks from './navLinks';
import SideBar from './sideBar';
import AdditionalInfo from './additionInfo';
import Loader from './loader';

const NewsFeedsWall = (props) => {
  const desktopDevice = useMediaQuery('(min-width:600px)');
  const classes = useStyles();
  const { data, isLoading, user, getNewsFeeds } = props;
  const [hasMore, setHasMore] = React.useState(true);
  const [pageSize, setPageSize] = React.useState(5)

  React.useEffect(() => {
    if(data) {
      setHasMore(!(data.responseData.length === data.metaData.count))
      setPageSize(data.metaData.pageSize + 5)
    }else{
      setHasMore(false)
    }
  }, [data])

  const fetchNewsFeeds = (pageSize) => {
    if(data) {
      setHasMore(!(data.responseData.length === data.metaData.count))
      setPageSize(data.metaData.pageSize + 5)
    }else{
      setHasMore(false)
    }
    getNewsFeeds(pageSize)
  }
    
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {desktopDevice && <Grid item lg={3} md={3} xs={6} sm={3}>
         <SideBar>
           <NavLinks user={user} />
         </SideBar>
        </Grid>}
        <Grid item lg={6} md={6} xs={12} sm={12}>
            {isLoading && <Loader color="primary" size={40} />}
            <InfiniteScroll
              dataLength={data ? data.responseData.length : 0}
              next={() => fetchNewsFeeds(pageSize)}
              hasMore={hasMore}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>No more content</b>
                </p>
              }
            >
              {/* {!isLoading &&  data && data.responseData.map((res, index) => <NewsFeed data={res} key={`${res.id}${index}`} /> )} */}
             <div>
                
              <AdSense.Google
                client='ca-pub-7220895595379340'
                style={{ display: 'block' }}
                format='auto'
                responsive='true'
              />
              </div>
            </InfiniteScroll>
        </Grid>
        {desktopDevice && <Grid item lg={3} md={3} xs={6} sm={3}>
          <SideBar>
            <AdditionalInfo />
          </SideBar>
        </Grid>}
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