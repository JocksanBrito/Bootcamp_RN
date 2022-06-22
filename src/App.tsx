import React from 'react';
import {ThemeProvider} from 'styled-components';
import useAppearance from './hooks/useAppearance/index';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './navigation';
import {AuthProvider} from './context/Auth';

const App: React.FC = () => {
    const {theme} = useAppearance();
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
