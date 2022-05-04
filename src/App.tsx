import React from 'react';
import {View} from 'react-native';
import Header from './components/Header';
import Button from './components/Button';

import {Container} from './styles';

import {ThemeProvider} from 'styled-components';
import useAppearance from './hooks/useAppearance/index';
import Text from './components/Text/index';
import Icon from './components/Icon';

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
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        margin: 35,
                    }}>
                    <Icon icon="tree" size={100} activeColor="primary" />
                    <Icon
                        icon="meditation"
                        size={100}
                        activeColor="secundary"
                    />
                    <Icon icon="plate" size={100} activeColor="error" />
                </View>
            </Container>
        </ThemeProvider>
    );
};
__DEV__;
export default App;
