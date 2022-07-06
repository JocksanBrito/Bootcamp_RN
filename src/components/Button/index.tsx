import React, {useContext, useMemo} from 'react';
import {ThemeContext} from 'styled-components';
import {ButtonProps} from './types';

import {Container, Title, Loading, AbsoluteIcon} from './styles';

const Button = ({
    children,
    mode = 'contained',
    typography = 'body2',
    color = 'primary',
    loading,
    onPress,
    icon,
    ...rest
}: ButtonProps) => {
    const {colors} = useContext(ThemeContext);

    const colorByMode = useMemo(() => {
        return mode === 'outlined' ? colors[color].main : colors[color].onMain;
    }, [mode, color, colors]);

    return (
        <Container
            mode={mode}
            borderColor={colors[color].main}
            color={colors[color].main}
            onPress={onPress}
            {...rest}>
            {!!icon && <AbsoluteIcon>{icon}</AbsoluteIcon>}
            <Title typography={typography} color={colorByMode}>
                {children}
            </Title>
            {loading && <Loading size={15} color={colorByMode} />}
        </Container>
    );
};

export default Button;
