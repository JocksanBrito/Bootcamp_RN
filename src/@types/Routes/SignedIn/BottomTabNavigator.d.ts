import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

declare global {
    export type BottomTabParamList = {
        home: undefined;
        profile: undefined;
    };

    // useNavigation types
    export type StartBottomTabNavigationProp = BottomTabNavigationProp<
        BottomTabParamList,
        'home'
    >;
}
