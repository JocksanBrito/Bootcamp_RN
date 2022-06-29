import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StatusBar, useWindowDimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from 'styled-components';
import Button from '~/components/Button';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import useSignInNavigation from '~/hooks/useSignInNavigation';
import {Container, Person, ContainerColum} from './styles';

const OnBoarding: React.FC = () => {
    const {spacing} = useTheme();
    const {height} = useWindowDimensions();
    const {bottom, top} = useSafeAreaInsets();
    const navigation = useSignInNavigation();

    //states
    const [heightPerson, setHeightPerson] = useState(0);

    //callbacks
    const handleNavigationToScreen = () => navigation.navigate('access');

    const handleHeightToPerson = (heightContainerBox: number) => {
        const freeSpace = height - (heightContainerBox + top + bottom + 60);
        setHeightPerson(freeSpace);
    };
    return (
        <Container>
            <StatusBar barStyle="default" />
            <Separator height={spacing.sm} />
            <Person size={heightPerson} icon="doctor" resizeMode="contain" />
            <ContainerColum
                onLayout={e =>
                    handleHeightToPerson(e.nativeEvent.layout.height)
                }>
                <Separator height={spacing.md} />
                <Text typography="h4">
                    Bem vindo ao
                    <Text typography="h3"> Vacinadx</Text>
                </Text>
                <Separator height={spacing.md} />
                <Text typography="subtitle1">
                    Sua carteira digital de vacinação de maneira fácil e prática
                    de carregar!
                </Text>
                <Separator height={spacing.xxxl} />
                <Button onPress={handleNavigationToScreen}>Começar</Button>
                <Separator height={spacing.md} />
            </ContainerColum>
        </Container>
    );
};

export default OnBoarding;
