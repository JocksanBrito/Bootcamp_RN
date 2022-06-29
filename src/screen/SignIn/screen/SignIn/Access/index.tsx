import React from 'react';
import {StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from 'styled-components';
import splashScreen from '~/assets/images/splash/splashScreen.png';
import Button from '~/components/Button';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import useSignInNavigation from '~/hooks/useSignInNavigation';

import {
    Container,
    ContainerRounded,
    IconRoundedVaccine,
    IconVaccine,
    Column,
} from './styles';

const Access: React.FC = () => {
    const {bottom} = useSafeAreaInsets();
    const {spacing} = useTheme();
    const navigation = useSignInNavigation();
    //callback

    const handleNavigatoToLogin = () => navigation.navigate('login');
    const handleNavigatoToSigUp = () => navigation.navigate('signUp');

    return (
        <Container source={splashScreen}>
            <StatusBar barStyle="light-content" />
            <Column>
                <IconRoundedVaccine>
                    <IconVaccine icon="veccinePlus" size={80}></IconVaccine>
                </IconRoundedVaccine>
                <Separator height={spacing.md} />
                <Text typography="h2" color="background">
                    Vacinadex
                </Text>
            </Column>
            <ContainerRounded>
                <Separator height={spacing.xl} />
                <Text typography="h4">Bem vindx</Text>
                <Separator height={spacing.sm} />
                <Text typography="subtitle1">Acesse ao app</Text>
                <Separator height={spacing.xxl} />
                <Button onPress={handleNavigatoToLogin}>Login</Button>
                <Separator height={spacing.lg} />
                <Button onPress={handleNavigatoToSigUp} mode="outlined">
                    Cadastro
                </Button>
                <Separator height={bottom + spacing.xxxl} />
            </ContainerRounded>
        </Container>
    );
};

export default Access;
