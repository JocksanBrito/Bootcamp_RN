import React, {useContext, useEffect, useState} from 'react';
import {DevSettings} from 'react-native';
import BottomTabsNavigator from './SignedInNavigator/BottomTabNavigator';
import SignInNavigator from './SignInNavigator';

// import { Container } from './styles';
import {AuthContext} from '~/context/Auth';

const Routes: React.FC = () => {
    const {isLoggedIn} = useContext(AuthContext);

    console.log(isLoggedIn);

    return isLoggedIn ? <BottomTabsNavigator /> : <SignInNavigator />;
};

export default Routes;
