import React from 'react';
import Header from '../../../components/header';

const NewsFeedsView = (props) => {
    const { logout } = props;
    return <React.Fragment>
        <Header logout={logout}/>
    </React.Fragment>
}

export default NewsFeedsView;

