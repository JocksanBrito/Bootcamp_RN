import React from 'react';
import {View} from 'react-native';
import Button from './components/Button';

import {Container} from './styles';

import {ThemeProvider} from 'styled-components';
import useAppearance from './hooks/useAppearance/index';
import Icon from './components/Icon';
import Separator from './components/Separator';

const App: React.FC = () => {
    const {theme} = useAppearance();

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        margin: 35,
                    }}>
                    <Icon
                        icon="meditation"
                        size={150}
                        activeColor="secundary"
                    />
                    <Separator width={40} />
                    <Icon icon="plate" size={150} activeColor="error" />
                </View>
                <Button mode="outlined" color="primary">
                    Change Icons
                </Button>
            </Container>
        </ThemeProvider>
    );
};
__DEV__;
export default App;
