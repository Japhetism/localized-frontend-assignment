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

  const mockAdsData = {
    "id": 1,
    "firstName": "Google",
    "lastName": "Ads",
    "message": "Customers are searching online for what you offer. Be there for them with Google Ads.",
    "image": "https://scontent-los2-1.xx.fbcdn.net/v/t45.1600-4/fr/cp0/q90/spS444/120941797_23846343218880472_5432732573239882998_n.png.jpg?_nc_cat=1&ccb=1-3&_nc_sid=68ce8d&_nc_eui2=AeGzbB15ZGFplqiNJPNJFolz88phiD9h4yTzymGIP2HjJLyhnDH4YqqiGoTzkUosN08&_nc_ohc=o4kMWn711BQAX9kgVlG&_nc_ht=scontent-los2-1.xx&tp=31&oh=a1c30e780fdac8825e159e55d7c15094&oe=60D8580C",
    "type": "Sponsored"
  }

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
              {!isLoading &&  data && data.responseData.map((res, index) => {
                if(index % 4 === 0) {
                  return (
                    <>
                    <NewsFeed data={mockAdsData} />
                    <NewsFeed data={res} key={`${res.id}${index}`} /> 
                    </>
                  ) 
                }else{
                  return ( 
                    <NewsFeed data={res} key={`${res.id}${index}`} /> 
                  )
                }
              })}
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