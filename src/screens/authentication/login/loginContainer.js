import React from 'react';
import LoginView from './loginView';
import { AuthContext } from '../../../App';
import { login } from '../../../services/authentication';
import Toast from '../../../components/toast';

export const LoginContainer = () => {
    const { dispatch } = React.useContext(AuthContext);
    const initialState = {
        isLoading: false,
        errorMessage: null
    };

    const [data, setData] = React.useState(initialState);

    const handleFormSubmit = (loginData) => {
        setData({
            ...data,
            isLoading: true,
            errorMessage: null
        })
        login(loginData)
            .then(res => {
                console.log(res)
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
                }
            })
            .catch(error => {
                dispatch({
                    type: "LOGIN_FAILURE",
                    payload: error
                })
                // <Toast />
                // setData({
                //     ...data,
                //     isLoading: false,
                //     errorMessage: error.message
                // })
                console.log(error)
            })
    }

    return <LoginView handleFormSubmit={handleFormSubmit} />
    
}