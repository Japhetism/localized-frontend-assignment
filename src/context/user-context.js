import React from 'react';

const AuthContext = React.createContext();

export const useAuth = () => React.useContext(AuthContext);

