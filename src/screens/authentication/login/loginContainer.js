import React from 'react';
import LoginView from './loginView';
import { AuthContext } from '../../../App';

export const LoginContainer = () => {
    const { dispatch } = React.useContext(AuthContext);
    const initialState = {
        email: "",
        password: "",
        isLoading: false,
        errorMessage: null
    };

    const [data, setData] = React.useState(initialState);

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
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
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        })
        .then(resJson => {
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

    return <LoginView />
    
}