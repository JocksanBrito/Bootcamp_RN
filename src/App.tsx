import React from 'react';
import {ThemeProvider} from 'styled-components';
import useAppearance from './hooks/useAppearance/index';

import {NavigationContainer} from '@react-navigation/native';
import Routes from './navigation';

const App: React.FC = () => {
    const {theme} = useAppearance();
    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        </ThemeProvider>
    );
};
export default App;
