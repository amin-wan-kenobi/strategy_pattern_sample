//In charge of rendering pieces of component
import React from 'react';
import { Button } from 'react-native';

import config from '../config';

export const renderButton = (componentName, onPress = () =>{}) => {
    let { display, label } = config[componentName].button;
    if(display){
        return <Button title={label} onPress={onPress} />
    }
}