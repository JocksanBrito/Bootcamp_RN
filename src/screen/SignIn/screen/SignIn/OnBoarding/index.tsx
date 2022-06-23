import React from 'react';
import {SafeAreaView} from 'react-native';
import Button from '~/components/Button';
import useAuth from '~/hooks/useAuth';

const OnBoarding: React.FC = () => {
    const {signIn, loading} = useAuth();

    return (
        <SafeAreaView>
            <Button
                loading={loading}
                onPress={() =>
                    signIn({
                        email: 'jocksan.brittos1989@gmail.com',
                        password: 'kldjfsjkas17188847',
                    })
                }>
                Sign In
            </Button>
        </SafeAreaView>
    );
};

export default OnBoarding;
