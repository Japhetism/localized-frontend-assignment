import React from 'react';
import LoginView from './loginView';
import { AuthContext } from '../../../App';

export const LoginContainer = () => {
    const { dispatch } = React.useContext(AuthContext);
    const initialState = {
        isLoading: false,
        errorMessage: null
    };

    const [data, setData] = React.useState(initialState);

    const handleFormSubmit = (loginData) => {
        console.log(loginData);
        setData({
            ...data,
            isLoading: true,
            errorMessage: null
        })
        fetch("https://babatunde-assignment.herokuapp.com/api/v1/login", {
            method: "post",
            headers: {
                "content-Type": "application/json"
            },
            body: loginData
        })
        .then(res => {
            if(res.ok) {
                return res.json();
            } else {
                throw res;
            }
        })
        .then(resJson => {
            console.log("from login endpoint ", resJson)
            dispatch({
                type: "LOGIN",
                payload: resJson
            })
        })
        .catch(error => {
            setData({
                ...data,
                isLoading: false,
                errorMessage: error.message
            })
        })
    }

    return <LoginView handleFormSubmit={handleFormSubmit} />
    
}