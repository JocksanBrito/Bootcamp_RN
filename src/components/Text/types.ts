import {TextProps} from 'react-native';
import {ColorsType, TypographyType, DefaultTheme} from 'styled-components';

export interface Props extends TextProps {
    children: string | React.ReactNode;
    color?: ColorsType;
    typography?: TypographyType;
    theme?: DefaultTheme;
}
