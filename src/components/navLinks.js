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
    const classes = useStyles();
    return <React.Fragment>
        <div className={classes.ShortcutContainer}>
            <Typography variant="h6" component="span" className={classes.shortcutsTitle}>
                Your Shortcuts
            </Typography>
            <div className={classes.shortcutsInfo}>
                <Typography variant="body1" component="span">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/I69_YK291RX.png?_nc_eui2=AeEyk9QJFXPo-mx5k5CKH7sEOC-3JWBXKCg4L7clYFcoKERti7NVyfBbXhga8wqZiQk" alt="" className={classes.image} /> Jarfluect Entertainment Inc.
                </Typography>
            </div>
            <div className={classes.copyrightContainer}>
                <Typography variant="body1" component="span" className={classes.copyright}>
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
    ShortcutContainer: {
        margin: "20px"
    },
    image: {
        height: "26px",
        width: "26px"
    },
    shortcutsTitle: {
        color: "#65676B"
    },
    shortcutsInfo: {
        marginTop: "10px"
    },
    copyright: {
        fontSize: "12px",
        color: "#65676B"
    },
    copyrightContainer: {
        marginTop: "30px"
    }
}));

export default NavLinks;