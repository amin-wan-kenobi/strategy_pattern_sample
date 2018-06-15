import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import { renderButton } from '../helpers/strategy'


export default class PartiallyRenderedComponent extends Component {
    constructor(props){
      super(props);
    }
    render() {
      return (
        <View>
          <Text style={{textAlign: 'center'}}>
            2-Partially Rendered Component
          </Text>
          <Text style={{textAlign: 'center', fontSize: 13}}>
            2-It decides to show the button below or not (check config.js)
          </Text>
          {renderButton('partiallyRenderedComponent', () => alert('Function can be passed to this button as well'))}
        </View>
      );
    }
  }
