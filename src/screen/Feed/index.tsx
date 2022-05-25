import React from 'react';
import {Button, View} from 'react-native';

import {Container} from './styles';

const Feed: React.FC = ({navigation}) => {
    const handlePress = () => {
        navigation.navigate('stories');
    };

    return (
        <Container>
            <Button title="Go to the Stories" onPress={handlePress}></Button>
        </Container>
    );
};

export default Feed;
