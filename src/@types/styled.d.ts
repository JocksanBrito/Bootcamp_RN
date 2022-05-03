import 'styled-components';

declare module 'styled-components' {
    export interface ColorType {
        main: string;
        onMain: string;
    }

    export interface PaletteType {
        primary: ColorType;
        secundary: ColorType;
        background: ColorType;
        error: ColorType;
        surface: ColorType;
    }

    export interface DefaultTheme {
        colors: PaletteType;
    }
}
