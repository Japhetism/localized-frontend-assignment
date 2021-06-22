import React from 'react';
import { 
  List, Divider, ListItem, ListItemIcon, ListItemText, Typography, makeStyles 
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';
import { getStringFirstLetter } from '../utils/helper';
import { links } from '../fixtures/links';

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
    const classes = useStyles();
    return <List>
        {links.map((link, index) => (
        <ListItem button key={link.name}>
            <ListItemIcon>{<img src={link.icon} alt="" className={classes.image} />}</ListItemIcon>
            <ListItemText primary={link.name} />
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

const useStyles = makeStyles((theme) => ({
    image: {
        height: "36px",
        width: "36px"
    }
}));

export default NavLinks;