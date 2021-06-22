import React from 'react';
import { 
    List, Divider, ListItem, ListItemIcon, ListItemText, Typography, makeStyles 
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CakeIcon from '@material-ui/icons/Cake';
import { contacts } from "../fixtures/contacts";
  
const FriendsRequests = () => {
    const classes = useStyles();
    return <List>
        <Typography variant="h6" component="span" className={classes.title}>Friend Requests</Typography>
        {['Babatunde Ojo'].map((text, index) => (
            <ListItem button key={text}>
                <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        ))}
    </List>
}

const Birthdays = () => {
    const classes = useStyles();
    const text = "James Doe and 2 others have birthdays today."
    return <List>
        <Typography variant="h6" component="span" className={classes.title}>Birthdays</Typography>
        <ListItem button key={text}>
            <ListItemIcon><CakeIcon /></ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
    </List>
}

const Contacts = () => {
    const classes = useStyles();
    return <List>
        <Typography variant="h6" component="span" className={classes.title}>Contacts</Typography>
        {contacts.map((text, index) => (
            <ListItem button key={text}>
                <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        ))}
    </List>
}

const GroupConversation = () => {
    const classes = useStyles();
    return <div>
        <Typography variant="h6" component="span" className={classes.title}>
            Group Conversation
        </Typography>
    </div>
}

const AdditionalInfo = () => {
    return <React.Fragment>
        <FriendsRequests />
        <Divider />
        <Birthdays />
        <Divider />
        <Contacts />
        <Divider />
        <GroupConversation />
    </React.Fragment>
}

const useStyles = makeStyles((theme) => ({
    title: {
        color: "#65676B",
        padding: "18px",
        fontSize: "18px"
    }
}));

export default AdditionalInfo;