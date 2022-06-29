import {Border, Spacing, Typography} from 'styled-components';
import {Fonts} from '../fonts';

export const typographyCommon: Typography = {
    h1: {
        fontSize: 96,
        fontFamily: Fonts.openSansLight,
    },
    h2: {
        fontSize: 48,
        fontFamily: Fonts.montserratBold,
    },
    h3: {
        fontSize: 32,
        fontFamily: Fonts.montserratBold,
    },
    h4: {
        fontSize: 32,
        fontFamily: Fonts.montserratSemiBold,
    },
    h5: {
        fontSize: 24,
        fontFamily: Fonts.montserratSemiBold,
    },
    h6: {
        fontSize: 20,
        fontFamily: Fonts.montserratRegular,
    },
    subtitle1: {
        fontSize: 18,
        fontFamily: Fonts.openSansRegular,
    },

    subtitle2: {
        fontSize: 16,
        fontFamily: Fonts.openSansLight,
    },

    subtitle3: {
        fontSize: 14,
        fontFamily: Fonts.openSansSemiBold,
    },

    body1: {
        fontSize: 14,
        fontFamily: Fonts.openSansRegular,
    },

    body2: {
        fontSize: 16,
        fontFamily: Fonts.openSansBold,
    },

    body3: {
        fontSize: 14,
        fontFamily: Fonts.openSansRegular,
    },

    caption: {
        fontSize: 12,
        fontFamily: Fonts.openSansRegular,
    },

    overline: {
        fontSize: 14,
        fontFamily: Fonts.openSansLight,
    },
};

export const spacing: Spacing = {
    ty: 4,
    xs: 5,
    sm: 10,
    md: 20,
    lg: 25,
    xl: 38,
    xxl: 45,
    xxxl: 100,
};

export const borders: Border = {
    radius: {
        xs: 4,
        sm: 10,
    },
};
