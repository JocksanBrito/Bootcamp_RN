import React from 'react';
import {Button, View} from 'react-native';

import {Container} from './styles';

const Feed: React.FC = ({navigation}) => {
    const handlePress = () => {
        navigation.navigate('stories');
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
