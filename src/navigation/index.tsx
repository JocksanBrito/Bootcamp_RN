import React from 'react';
import BottomTabsNavigator from './SignedInNavigator/BottomTabNavigator';
import SignInNavigator from './SignInNavigator';

import useAuth from '../hooks/useAuth/index';

const Routes: React.FC = () => {
    const {isSignedIn} = useAuth();
    return isSignedIn ? <BottomTabsNavigator /> : <SignInNavigator />;
};

export default Routes;
