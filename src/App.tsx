import React from 'react';
import {StyleSheet, SafeAreaView, Appearance} from 'react-native';
import Header from './components/Header';
import Button from './components/Button';

import {ThemeProvider} from 'styled-components';
import useAppearance from './hooks/useAppearance/index';

const App: React.FC = () => {
    const {theme} = useAppearance();

    return (
        <ThemeProvider theme={theme}>
            <SafeAreaView style={style.App}>
                <Header />
                <Button onPress={() => {}} />
            </SafeAreaView>
        </ThemeProvider>
    );
};
__DEV__;
export default App;

const style = StyleSheet.create({
    App: {
        flex: 1,
        backgroundColor: 'black',
    },
});
