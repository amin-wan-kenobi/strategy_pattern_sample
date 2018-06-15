import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { renderHeader } from '../helpers'

export default class LoginFrance extends Component {
  static navigationOptions = () => {
    return {
      title: renderHeader('loginComp')
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Login France
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
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
