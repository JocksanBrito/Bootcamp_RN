import React from 'react';
import {StatusBar, View} from 'react-native';

import {Container, AccessText, PressableX} from './styles';

import Icon from '~/components/Icon';
import HeaderOptions from '~/components/HeaderOptions';
import Text from '~/components/Text';
import Separator from '~/components/Separator';
import {useTheme} from 'styled-components';
import Input from '~/components/Input';
import Button from '~/components/Button';
import useSignInNavigation from '~/hooks/useSignInNavigation';

const Login: React.FC = () => {
    const {spacing} = useTheme();
    const navigation = useSignInNavigation();

    //callback

    const handleGoBack = () => navigation.goBack();

    return (
        <Container>
            <StatusBar barStyle="default" />
            <HeaderOptions
                left={
                    <PressableX onPress={handleGoBack}>
                        <Icon icon="closeX" size={20} />
                    </PressableX>
                }
                right={
                    <Text color="primary" typography="body1">
                        Esqueci minha senha
                    </Text>
                }
            />
            <Separator height={spacing.md} />
            <Text typography="h3">Login</Text>
            <Separator height={spacing.md} />
            <Input label="E-mail" icon="checkCircle" iconColor="primary" />
            <Input label="Senha" secureTextEntry iconColor="primary" />
            <Separator height={spacing.md} />
            <Button>Login</Button>
            <Separator height={spacing.md} />
            <AccessText color="surface500" typography="body3">
                Ou acesse com login social
            </AccessText>
            <Separator height={spacing.md} />
            <Button
                typography="caption"
                icon={<Icon icon="apple" />}
                color="secundary"
                mode="outlined">
                Continuar com a Apple
            </Button>
            <Separator height={spacing.md} />
            <Button
                typography="caption"
                icon={<Icon icon="google" />}
                color="secundary"
                mode="outlined">
                Continuar com a Google
            </Button>
        </Container>
    );
};

export default Login;
