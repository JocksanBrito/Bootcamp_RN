import {ImageProps} from 'react-native';
import {NameIconTypes} from '../../constants/icons';
import {ColorsType} from 'styled-components';

export interface IconOptionProps {
    icon: NameIconTypes;
    size?: number;
    activeColor?: ColorsType;
}

export interface IconProps extends ImageProps, IconOptionProps {}
