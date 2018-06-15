import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';


export default class ComponentWithProps extends Component {
  render() {
    return (
      <View>
        <Text style={{textAlign: 'center'}}>
          3-Component wiht Props
        </Text>
        <Text style={{textAlign: 'center'}}>
          3-Passed Props from Parent: {this.props.text}
        </Text>
      </View>
    );
  }
}