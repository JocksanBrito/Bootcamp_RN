import {TouchableOpacityProps} from 'react-native';
import {ColorsType, TypographyType} from 'styled-components';

export type Mode = 'outlined' | 'contained';

export interface ButtonProps extends TouchableOpacityProps {
    children?: string;
    color?: ColorsType;
    typography?: TypographyType;
    icon?: React.ReactNode;
    mode?: Mode;
    loading?: boolean;
}
