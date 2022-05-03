import React from 'react';
import {View} from 'react-native';
import {ThemeProvider} from 'styled-components';

import {Container, Name, Title} from './styles';

const Header = () => {
    return (
        <Container>
            <Title>Bem vindo</Title>
            <Name>Jocksan</Name>
        </Container>
    );
};

export default Header;
