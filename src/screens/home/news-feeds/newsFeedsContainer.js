import React from 'react';
import NewsFeedsView from './newsFeedsView';
import { AuthContext } from '../../../App';

export const NewsFeedsContext = React.createContext();

const initialState = {
    newsFeeds: [],
    isLoading: false,
    hasError: false
};

const newsFeedsReducer = (state, action) => {
    switch(action.type) {
        case "FETCH_NEWS_FEEDS_REQUEST":
            return {
                ...state,
                isLoading: true,
                hasError: false
            };
        case "FETCH_NEWS_FEEDS_SUCCESS":
            return {
                ...state,
                isLoading: false,
                newsFeeds: action.payload
            };
        case "FETCH_NEWS_FEEDS_FAILURE":
            return {
                ...state,
                hasError: true,
                isLoading: false
            }
        default:
            return state;
    }
}

export const NewsFeedsContainer = () => {
    const { state: authState, dispatch: authDispatch } = React.useContext(AuthContext);
    const [state, dispatch] = React.useReducer(newsFeedsReducer, initialState);

    const getNewsFeeds = (pageSize) => {
        fetch(`https://babatunde-assignment.herokuapp.com/api/v1/news-feeds?pageSize=${pageSize}`, {
            headers: {
                Authorization: `Bearer ${authState.token}`
            },
            method: "get"
        })
        .then(res => {
            if(res.ok) {
                return res.json();
            } else {
                throw res;
            }
        })
        .then(resJson => {
            dispatch({
                type: "FETCH_NEWS_FEEDS_SUCCESS",
                payload: resJson
            });
        })
        .catch(error => {
            dispatch({
                type: "FETCH_NEWS_FEEDS_FAILURE"
            });
        });
    }

    React.useEffect(() => {
        dispatch({
            type: "FETCH_NEWS_FEEDS_REQUEST"
        });
        getNewsFeeds(5)
        
    }, [authState.token]);

    const logout = () => {
        authDispatch({
            type: "LOGOUT"
        })
    }

    const { isLoading, hasError, newsFeeds } = state;

    return <NewsFeedsView 
        logout={logout} 
        isLoading={isLoading} 
        hasError={hasError} 
        newsFeedsData={newsFeeds.data} 
        user={authState.user}
        getNewsFeeds={getNewsFeeds}
    />
}