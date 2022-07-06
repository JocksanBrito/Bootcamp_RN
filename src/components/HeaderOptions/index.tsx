import React, {useMemo} from 'react';
import {StatusBar} from 'react-native';

import {HeaderOptionsProps} from './types';

import {Container} from './styles';
import Separator from '../Separator/index';
import {useTheme} from 'styled-components';

const HeaderOptions = ({
    left = <Separator />,
    center = <Separator />,
    right = <Separator />,
}: HeaderOptionsProps) => {
    const {spacing} = useTheme();

    const heightSeparatorStatusBar = useMemo(() => {
        return StatusBar.currentHeight
            ? StatusBar.currentHeight + spacing.md
            : spacing.md;
    }, [spacing]);
    return (
        <>
            <Separator height={heightSeparatorStatusBar} />
            <Container>
                {left}
                {center}
                {right}
            </Container>
        </>
    );
};

export default HeaderOptions;
