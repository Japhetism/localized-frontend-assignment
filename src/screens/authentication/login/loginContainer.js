import React from 'react';
import LoginView from './loginView';
import { AuthContext } from '../../../App';
import { login } from '../../../services/authentication';

export const LoginContainer = () => {
    const { dispatch } = React.useContext(AuthContext);
    const initialState = {
        isLoading: false,
    };

    const [data, setData] = React.useState(initialState);

    const handleFormSubmit = (loginData) => {
        setData({
            ...data,
            isLoading: true
        })
        login(loginData)
            .then(res => {
                if(res) {
                    return res.json();
                } else {
                    throw res;
                }
            })
            .then(resJson => {
                if(resJson.status === "success") {
                    dispatch({
                        type: "LOGIN",
                        payload: resJson
                    })
                } else {
                    dispatch({
                        type: "LOGIN_FAILURE",
                        payload: resJson
                    })
                    setData({
                        ...data,
                        isLoading: false
                    })
                }
            })
            .catch(error => {
                dispatch({
                    type: "LOGIN_FAILURE",
                    payload: error
                })
                setData({
                    ...data,
                    isLoading: false
                })
            })
    }

    return <LoginView handleFormSubmit={handleFormSubmit} isLoading={data.isLoading} />
    
}