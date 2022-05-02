import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Header from './components/Header';

// import { Container } from './styles';

const App: React.FC = () => {
    return (
        <SafeAreaView style={style.App}>
            <Header />
        </SafeAreaView>
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
