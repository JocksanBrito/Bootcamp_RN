import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Text from '~/components/Text';

import {Container} from './styles';

const Profile = ({navigation, route}) => {
    const {userName} = route.params;
    console.log(userName);
    const handleNavigation = () => navigation.push('profile');
    const handleUpdateParams = () =>
        navigation.setParams({
            userName: 'Biscottobi',
        });
    const handleNavigateToHome = () =>
        navigation.navigate('home', {
            selectedUser: 'Biscottobi',
        });

    return (
        <Container>
            <TouchableOpacity onPress={handleNavigation}>
                <Text> {`Profile: ${userName}`}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleUpdateParams}>
                <Text>Update Params</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNavigateToHome}>
                <Text>Navigate to home with Params</Text>
            </TouchableOpacity>
        </Container>
    );
};

export default Profile;
