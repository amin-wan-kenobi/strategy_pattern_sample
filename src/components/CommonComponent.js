import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { renderCommonComponent } from '../helpers/strategy'


export default class CommonComponent extends Component {
    constructor(props){
      super(props);
    }
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.instructions}>
            HELLO I am a Common Component in Different Projects
          </Text>
          {renderCommonComponent()}
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      padding: 100
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
  