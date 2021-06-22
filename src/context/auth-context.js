import React from 'react';

const AuthContext = React.createContext();

export const AuthProvider = (props) => {
    const data = null;
    const login = () => {}
    const register = () => {}
    const logout = () => {}

    return (
        <AuthContext.Provider value={{data, login, logout, register}} {...props} />
    )
}