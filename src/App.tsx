import React from 'react';
import {BackHandler, StyleSheet, Text, View} from 'react-native';

// import { Container } from './styles';

const App: React.FC = () => {
    return (
        <View style={style.App}>
            <Text style={style.Title}>Welcome to Shima Academy</Text>
        </View>
    );
};
__DEV__;
export default App;

const style = StyleSheet.create({
    App: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
    },

    Title: {
        color: 'white',
        fontSize: 30,
    },
});
