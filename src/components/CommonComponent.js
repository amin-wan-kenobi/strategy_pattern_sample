import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import { renderButton } from '../helpers/strategy'


export default class CommonComponent extends Component {
    constructor(props){
      super(props);
    }
    render() {
      return (
        <View>
          <Text>
            HELLO I am a Common Component in Different Projects
          </Text>
          {renderButton('commonComp')}
        </View>
      );
    }
  }
