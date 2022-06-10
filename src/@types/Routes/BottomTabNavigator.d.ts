import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams} from '@react-navigation/native';

declare global {
    export type BottomTabParamList = {
        home: NavigatorScreenParams<HomeStackParamList> | undefined;
        profile: NavigatorScreenParams<ProfileStackParamList> | undefined;
    };

    // useNavigation types
    export type StartBottomTabNavigationProp = BottomTabNavigationProp<
        BottomTabParamList,
        'home'
    >;
}
