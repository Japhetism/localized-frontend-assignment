import React from 'react';
import { 
  makeStyles, Card, CardHeader, CardMedia, CardContent, 
  Avatar, Typography, CardActions, Divider, Grid 
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ReactPlayer from 'react-player'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import parse from 'html-react-parser';
import { getStringFirstLetter, formatDate } from '../utils/helper';

const NewsFeed = (props) => {
  
  const classes = useStyles();
  const { data: { firstName, lastName, message, date, image, video, type, name, description } } = props;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {name ? getStringFirstLetter(name) : `${getStringFirstLetter(firstName)} ${getStringFirstLetter(lastName)}`}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name ? name : `${firstName} ${lastName}`}
        subheader={type ? type : formatDate(date)}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="div" className={classes.message}>
          {parse(description || message)}
        </Typography>
      </CardContent>
      {image && <CardMedia
        className={classes.media}
        image={image}
      />}
      {video && <ReactPlayer url={video} playing controls width="auto" />}
      <Divider />
      {!type && <CardActions>
        <Grid container spacing={3} className={classes.center}>
          <Grid item lg={4} md={3} sm={4} xs={4}>
            <Typography size="small" color="primary">
              <IconButton aria-label="add to favorites">
                <FavoriteBorderIcon />
              </IconButton>
              Likes
            </Typography>
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={4}>
            <Typography size="small" color="primary">
              <IconButton aria-label="share">
                <ChatBubbleOutlineIcon />
              </IconButton>
              Comments
            </Typography>
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={4}>
            <Typography size="small" color="primary">
              <IconButton aria-label="share">
                  <ShareIcon />
              </IconButton>
              Share
            </Typography>
          </Grid>
        </Grid>
      </CardActions>}
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 'auto',
      textAlign: 'left',
      marginBottom: '5%',
      width: "95%",
      [theme.breakpoints.down('sm')]: {
        margin: "5vh 1vh 0vh 1vh",
        width: "98%"
      },
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    center: {
      textAlign: "center",
      [theme.breakpoints.down('sm')]: {
        textAlign: "left",
        fontSize: "1  px"
      }
    },
    message: {
      color: "#000000"
    }
}));

export default NewsFeed;