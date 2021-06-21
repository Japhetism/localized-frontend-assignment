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

    console.log("from news feed state ", state)

    React.useEffect(() => {
        dispatch({
            type: "FETCH_NEWS_FEEDS_REQUEST"
        });
        fetch("https://babatunde-assignment.herokuapp.com/api/v1/news-feeds", {
            headers: {
                Authorization: `Bearer ${authState.token}`
            }
        })
        .then(res => {
            if(res.ok) {
                return res.json();
            } else {
                throw res;
            }
        })
        .then(resJson => {
            console.log(resJson);
            dispatch({
                type: "FETCH_NEWS_FEEDS_SUCCESS",
                payload: resJson
            });
        })
        .catch(error => {
            console.log(error);
            dispatch({
                type: "FETCH_NEWS_FEEDS_FAILURE"
            });
        });
    }, [authState.token]);

    const logout = () => {
        authDispatch({
            type: "LOGOUT"
        })
    }

    const { isLoading, hasError, newsFeeds } = state;


    return <NewsFeedsView logout={logout} isLoading={isLoading} hasError={hasError} newsFeedsData={newsFeeds.data} />
}