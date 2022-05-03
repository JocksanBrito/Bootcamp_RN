import React, {useContext} from 'react';
import {Button as ButtonRN} from 'react-native';
import {ThemeContext} from 'styled-components';

// import {Container} from './styles'

const Button: React.FC<{onPress: () => void}> = ({onPress}) => {
    const themeContext = useContext(ThemeContext);

    return (
        <ButtonRN
            color={themeContext.colors.secundary}
            title="change theme"
            onPress={onPress}
        />
    );
};

export default Button;
