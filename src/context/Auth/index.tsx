import React, {createContext, useState} from 'react';
import {Alert} from 'react-native';
import {UserDTO} from '~/@types/dtos/user';
import {AuthContextProp} from '../types';

export const AuthContext = createContext<AuthContextProp>(
    {} as AuthContextProp,
);

export const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<UserDTO>();
    const [loading, setLoading] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);

    // Callbacks

    const signIn = async (data?: {email: string; password: string}) => {
        setLoading(true);
        await new Promise(resolve => setTimeout(() => resolve('Ok'), 2000));
        setLoading(false);
        Alert.alert('new', 'Logou');
        setIsSignedIn(true);
        setUser({id: 'jocksanbritoleite'});
    };

    const signOut = () => {
        Alert.alert('new', 'Você está deslogado');
        setIsSignedIn(false);
        setUser(undefined);
    };

    return (
        <AuthContext.Provider
            value={{user, loading, isSignedIn, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
};
