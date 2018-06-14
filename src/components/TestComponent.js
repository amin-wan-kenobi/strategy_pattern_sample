import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';


export default class TestComponent extends Component {
  constructor(props){
    super(props);
    console.log('Test Components', props)
  }
  render() {
    return (
      <View>
        <Text>
          Test Component
        </Text>
        <Text>
          Passing Prop: {this.props.text}
        </Text>
      </View>
    );
  }
}