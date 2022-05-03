import {ColorSchemeName} from 'react-native';

export type themeType = 'light' | 'dark';

export interface Props {
    currentTheme: themeType;
    theme: object;
}

export interface colorSchemeProps {
    colorScheme: ColorSchemeName;
}
