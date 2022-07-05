import React, {useEffect} from 'react';
import {ThemeProvider} from 'styled-components';
import useAppearance from './hooks/useAppearance/index';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './navigation';
import {AuthProvider} from './context/Auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const App: React.FC = () => {
    const {theme} = useAppearance();
    useEffect(() => {
        GoogleSignin.configure({
            offlineAccess: true,
            scopes: ['profile', 'email'],
            webClientId:
                '565478158879-sjnks5riaqguinsesbbf43vkpkm4lgd7.apps.googleusercontent.com',
        });
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <AuthProvider>
                    <Routes />
                </AuthProvider>
            </NavigationContainer>
        </ThemeProvider>
    );
};
export default App;
