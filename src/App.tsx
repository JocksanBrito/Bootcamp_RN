import React, {useRef} from 'react';
import {Alert, View} from 'react-native';
import Button from './components/Button';

import {Container} from './styles';

import {ThemeProvider} from 'styled-components';
import useAppearance from './hooks/useAppearance/index';
import Icon from './components/Icon';
import Separator from './components/Separator';
import Input from './components/Input';
import {InputValueRef} from './components/Input/types';

const App: React.FC = () => {
    const {theme} = useAppearance();

    const refEmail = useRef<InputValueRef>({value: ''});
    const refPassword = useRef<InputValueRef>({value: ''});

    const handlePress = () => {
        Alert.alert(
            refEmail.current?.value || 'Não foi digitado E-mail',
            refPassword.current?.value || 'Não foi digitado senha',
        );
    };

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',

                        flexWrap: 'wrap',
                    }}>
                    <Icon
                        icon="meditation"
                        size={140}
                        activeColor="secundary"
                    />
                    <Separator width={40} />
                    <Icon icon="plate" size={150} activeColor="error" />
                </View>
                <View>
                    <Input
                        placeholder="username@hotmail.com"
                        ref={refEmail}
                        icon="tree"
                        label="E-mail"
                        iconPosition="left"
                    />
                    <Separator height={10} />
                    <Input
                        placeholder="Sua senha"
                        ref={refPassword}
                        secureTextEntry
                        label="Senha"
                    />
                </View>
                <Button mode="outlined" color="secundary" onPress={handlePress}>
                    Login
                </Button>
                <Separator />
            </Container>
        </ThemeProvider>
    );
};
__DEV__;
export default App;
