import React from 'react';
import {SafeAreaView} from 'react-native';
import Button from '~/components/Button';
import useAuth from '~/hooks/useAuth';

const OnBoarding: React.FC = () => {
    const {signIn} = useAuth();

    return (
        <SafeAreaView>
            <Button onPress={signIn}>Sign In</Button>
        </SafeAreaView>
    );
};

export default OnBoarding;
