import React from 'react';
import { 
  List, Divider, ListItem, ListItemIcon, ListItemText, Typography 
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';
import { getStringFirstLetter } from '../utils/helper';

const LoggedInUser = (props) => {
    const { user: { firstName, lastName } } = props
    return <List>
        <ListItem button key={"BO"}>
            <ListItemIcon>
            <Avatar aria-label="recipe">
                {`${getStringFirstLetter(firstName)}${getStringFirstLetter(lastName)}`}
        </Avatar>
            </ListItemIcon>
            <ListItemText primary={`${firstName} ${lastName}`} />
        </ListItem>
    </List>
}

const Links = () => {
    return <List>
    {['ConVID-19 Information Center', 'Friends', 'Groups', 'Market', 'Watch', 'Events', 'Memories', 'Saved', 'Pages', 'Ad Center', 'Ads Manager', 'Campus', 'Offers', 'Play Games', 'Climate Science Information', 'Community Help', 'Gaming Video', 'Most Recent', 'Weather', 'Recent Ad Activity', 'Messenger', 'Jobs', 'Fundraisers', 'Friend List', 'Emotional Health', '2Konnect Play'].map((text, index) => (
      <ListItem button key={text}>
        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    ))}
  </List>
}

const Shortcuts = () => {
    return <React.Fragment>
        <div>
            <Typography variant="h6" component="span">
                Your Shortcuts
            </Typography>
            <div>
                <Typography variant="body1" component="span">
                    Jarfluect Entertainment Inc.
                </Typography>
            </div>
            <div>
                <Typography variant="body1" component="span">
                    Konnect &copy; 2021
                </Typography>
            </div>
        </div>
    </React.Fragment>
}

const NavLinks = (props) => {
    const { user } = props;
    return <React.Fragment>
        <LoggedInUser user={user} />
        <Links />
        <Divider />
        <Shortcuts />
    </React.Fragment>
}

export default NavLinks;