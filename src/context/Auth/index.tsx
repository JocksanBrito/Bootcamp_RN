import React, {createContext, useState} from 'react';
import {Alert} from 'react-native';

export const AuthContext = createContext({});

export const AuthProvider: React.FC = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Callbacks

    const signIn = (data?: {email: string; password: string}) => {
        Alert.alert('new', 'trocou');
        setIsLoggedIn(true);
    };
    const signOut = () => {
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{isLoggedIn, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
};
