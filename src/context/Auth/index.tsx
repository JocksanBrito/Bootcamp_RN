import React, {createContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {UserDTO} from '~/@types/dtos/user';
import {asyncUserKeys, AuthContextProp} from './types';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {signResource} from '~/services/resource/auth';
import {RequestSignInData} from '../../services/resource/auth/types';

export const AuthContext = createContext<AuthContextProp>(
    {} as AuthContextProp,
);

export const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<UserDTO>();
    const [loading, setLoading] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [rehydrateLoading, setRehydrateLoading] = useState(true);

    // Callbacks

    const signIn = async (data: RequestSignInData) => {
        try {
            setLoading(true);
            const response = await signResource(data);
            setUser(response.user);
            setIsSignedIn(true);
            //api.default.headers.Authorization = 'Baerer ${response.data.token}'
            AsyncStorage.setItem(
                asyncUserKeys.user,
                JSON.stringify(response.user),
            );
        } catch (error) {
        } finally {
            setLoading(false);
        }
    };

    const signOut = async () => {
        setIsSignedIn(false);
        setUser(undefined);
        await AsyncStorage.clear();
    };

    const rehydrate = async () => {
        const rehydrateUser = await AsyncStorage.getItem(asyncUserKeys.user);

        if (rehydrateUser) {
            setUser(JSON.parse(rehydrateUser));
            setIsSignedIn(true);
        }
        setRehydrateLoading(false);
    };
    //useEffects

    useEffect(() => {
        rehydrate();
    }, []);

    return (
        <AuthContext.Provider
            value={{user, loading, isSignedIn, signIn, signOut}}>
            {!rehydrateLoading && children}
        </AuthContext.Provider>
    );
};
