import React from 'react';
import Icon from '../Icon';
import {Container} from './styles';
import {Props} from './types';

const BackButton = ({onPress, icon}: Props) => {
    return (
        <Container onPress={onPress}>
            <Icon icon={icon} size={20} />
        </Container>
    );
};

export default BackButton;
