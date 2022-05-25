import {useRoute} from '@react-navigation/native';
import React from 'react';

import {Container} from './styles';

const Stories: React.FC = () => {
    const {params} = useRoute();
    console.log(params);

    return <Container />;
};

export default Stories;
