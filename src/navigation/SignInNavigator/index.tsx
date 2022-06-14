import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from '~/screen/SignIn/screen/SignIn/OnBoarding';
import Acess from '~/screen/SignIn/screen/SignIn/Access';
import Login from '~/screen/SignIn/screen/SignIn/Login';
import SignUp from '~/screen/SignIn/screen/SignIn/SignUp';

const Stack = createNativeStackNavigator<SignInStackParamList>();

const SignInNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="onBoarding" component={OnBoarding} />
            <Stack.Screen name="access" component={Acess} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="signUp" component={SignUp} />
        </Stack.Navigator>
    );
};

export default SignInNavigator;
