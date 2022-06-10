import {NativeStackNavigationProp} from '@react-navigation/native-stack';

declare global {
    export type ProfileStackParamList = {
        perfil: undefined;
        post: undefined;
    };

    export type ProfileStackNavigatorProp = NativeStackNavigationProp<
        ProfileStackParamList,
        'perfil'
    >;
}
