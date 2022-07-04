import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from '~/screen/SignIn/screen/SignIn/OnBoarding';
import Acess from '~/screen/SignIn/screen/SignIn/Access';
import Login from '~/screen/SignIn/screen/SignIn/Login';
import SignUp from '~/screen/SignIn/screen/SignIn/SignUp';
import SignUpStep2 from '~/screen/SignIn/screen/SignIn/SignUpStep2';

const Stack = createNativeStackNavigator<SignInStackParamList>();

const SignInNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                header: () => null,
            }}>
            <Stack.Screen name="onBoarding" component={OnBoarding} />
            <Stack.Screen name="access" component={Acess} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="signUp" component={SignUp} />
            <Stack.Screen name="signUpStep2" component={SignUpStep2} />
        </Stack.Navigator>
    );
};

export default SignInNavigator;
