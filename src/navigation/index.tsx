import React from 'react';
import BottomTabsNavigator from './SignedInNavigator/BottomTabNavigator';
import SignInNavigator from './SignInNavigator';

// import { Container } from './styles';

const Routes: React.FC = () => {
    const isLoggedIn = false;
    return isLoggedIn ? (
        <BottomTabsNavigator></BottomTabsNavigator>
    ) : (
        <SignInNavigator />
    );
};

export default Routes;
