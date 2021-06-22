import React from 'react';
import { 
    List, Divider, ListItem, ListItemIcon, ListItemText, Typography 
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
  
const FriendsRequests = () => {
    return <List>
        <Typography variant="h6" component="span">Friend Requests</Typography>
        {['Babatunde Ojo'].map((text, index) => (
            <ListItem button key={text}>
                <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        ))}
    </List>
}

const Birthdays = () => {
    const text = "James Doe and 2 others have birthdays today."
    return <List>
        <Typography variant="h6" component="span">Birthdays</Typography>
        <ListItem button key={text}>
            <ListItemIcon><AccountCircleIcon /></ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
    </List>
}

const Contacts = () => {
    return <List>
        <Typography variant="h6" component="span">Contacts</Typography>
        {['Babatunde Ojo', 'James Doe', 'John kennedy', 'Kelvin Hart', 'Jacob Eson', 'Loius Rufus', 'Caleb Jasmine', 'Alves Alves', 'Doe Alves', 'kennedy Alves', 'Amazon Juis', 'Juis Ruf'].map((text, index) => (
            <ListItem button key={text}>
                <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        ))}
    </List>
}

const GroupConversation = () => {
    return <div>
        <Typography variant="h6" component="span">
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

export default AdditionalInfo;