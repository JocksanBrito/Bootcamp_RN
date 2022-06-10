import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button} from 'react-native';

import {Container} from './styles';

const Feed: React.FC = () => {
    const navigation = useNavigation<StartBottomTabNavigationProp>();
    const handlePress = () => {
        navigation.navigate('profile');
        navigation.navigate('home');

        navigation.navigate('home', {
            screen: 'stories',
            params: {
                profile: 'Jocksan',
            },
        });
    };

    const handlePressToPost = () => {
        navigation.navigate('profile', {
            screen: 'post',
        });
    };

    return (
        <Container>
            <Button title="Go to the Stories" onPress={handlePress}></Button>
            <Button title="Go to the Post" onPress={handlePressToPost}></Button>
        </Container>
    );
};

export default Feed;
