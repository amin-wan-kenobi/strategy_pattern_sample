import React from 'react';
import { Text } from 'react-native';

import config from '../config';


export const renderCommonComponent = () => {
    if(config.countries.canada.show){
        return <Text>Hi Canada. I have to be shown</Text>
    }
}