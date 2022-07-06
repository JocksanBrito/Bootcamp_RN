import React, {useEffect} from 'react';
import BottomTabsNavigator from './SignedInNavigator/BottomTabNavigator';
import SignInNavigator from './SignInNavigator';

import useAuth from '../hooks/useAuth/index';
import appleAuth from '@invertase/react-native-apple-authentication';

const Routes: React.FC = () => {
    const {isSignedIn, signOut} = useAuth();

    useEffect(() => {
        if (!appleAuth.isSupported) {
            return;
        }
        return appleAuth.onCredentialRevoked(async () => {
            signOut();
            console.log(
                'If this Function executes, User Credentials have been revoked',
            );
        });
    }, [signOut]);

    return isSignedIn ? <BottomTabsNavigator /> : <SignInNavigator />;
};

export default Routes;
