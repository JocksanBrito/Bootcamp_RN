import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from '~/screen/SignIn/screen/SignIn/OnBoarding';
import Acess from '~/screen/SignIn/screen/SignIn/Acess';
import Login from '~/screen/SignIn/screen/SignIn/Login';
import SignUp from '~/screen/SignIn/screen/SignIn/SignUp';

const Stack = createNativeStackNavigator();

const SignInNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="onboarding" component={OnBoarding} />
            <Stack.Screen name="acess" component={Acess} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="signup" component={SignUp} />
        </Stack.Navigator>
    );
};

export default SignInNavigator;
