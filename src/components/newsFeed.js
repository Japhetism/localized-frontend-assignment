import React from 'react';
import { 
  makeStyles, Card, CardHeader, CardMedia, CardContent, 
  Avatar, Typography, CardActions 
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { getStringFirstLetter, formatDate } from '../utils/helper';

const NewsFeed = (props) => {
  
  const classes = useStyles();
  const { data: { firstName, lastName, message, country, date } } = props;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {getStringFirstLetter(firstName)}{getStringFirstLetter(lastName)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${firstName} ${lastName}`}
        subheader={formatDate(date)}
      />
      {/* <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      /> */}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {message}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography size="small" color="primary">
            <IconButton aria-label="add to favorites">
                <FavoriteBorderIcon />
            </IconButton>
            Likes
        </Typography>
        <Typography size="small" color="primary">
            <IconButton aria-label="share">
                <ChatBubbleOutlineIcon />
            </IconButton>
            Comments
        </Typography>
        <Typography size="small" color="primary">
            <IconButton aria-label="share">
                <ShareIcon />
            </IconButton>
            Share
        </Typography>
      </CardActions>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 'auto',
      textAlign: 'left',
      marginBottom: '5%'
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
}));

export default NewsFeed;