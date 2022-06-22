import React from 'react';
import BottomTabsNavigator from './SignedInNavigator/BottomTabNavigator';
import SignInNavigator from './SignInNavigator';

import {AuthContext} from '~/context/Auth';
import useAuth from '../hooks/useAuth/index';

const Routes: React.FC = () => {
    const {isLoggedIn} = useAuth();

    console.log(isLoggedIn);

    return isLoggedIn ? <BottomTabsNavigator /> : <SignInNavigator />;
};

export default Routes;
