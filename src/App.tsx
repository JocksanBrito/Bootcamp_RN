import React from 'react';
import {StyleSheet, SafeAreaView, Appearance} from 'react-native';
import Header from './components/Header';
import Button from './components/Button';

import {Container} from './styles';

import {ThemeProvider} from 'styled-components';
import useAppearance from './hooks/useAppearance/index';
import Text from './components/Text/index';

const App: React.FC = () => {
    const {theme} = useAppearance();

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Header />
                <Button onPress={() => {}} />
                <Text typography="h3" color="secundary">
                    App Daora
                </Text>
            </Container>
        </ThemeProvider>
    );
};
__DEV__;
export default App;
