import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Appearance} from 'react-native';
import {colorSchemeProps, Props, themeType} from './types';
import {themeLight} from '../../constants/styles/themes/light';
import {themeDark} from '../../constants/styles/themes/dark';

const useAppearance = (): Props => {
    const [currentTheme, setCurrentTheme] = useState<themeType>(
        Appearance.getColorScheme() || 'light',
    );

    const handleChangeAppearance = useCallback(
        ({colorScheme}: colorSchemeProps) => {
            if (colorScheme) {
                setCurrentTheme(colorScheme);
            }
        },
        [],
    );

    const theme = useMemo(() => {
        if (currentTheme === 'light') return themeLight;
        return themeDark;
    }, [currentTheme]);

    useEffect(() => {
        Appearance.addChangeListener(handleChangeAppearance);

        return () => Appearance.removeChangeListener(handleChangeAppearance);
    }, [handleChangeAppearance]);

    return {currentTheme, theme};
};

export default useAppearance;
