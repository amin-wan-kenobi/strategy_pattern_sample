import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { renderHeader } from '../helpers'

export default class SignUpCanada extends Component {
  static navigationOptions = () => {
    return {
      title: renderHeader('signUpComp')
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Sign UP Canada
        </Text>
        <Button 
          onPress={() => this.props.navigation.navigate('Login')}
          title="Have Account, Canada?"
        />
        <Button
          title="Navigate to Login page with two params"
          onPress={() => {
            console.log(this.props); 
            this.props.navigation.navigate('Login', {param1: 'First From SignUp Page', param2: 'Second from SignUp Page'})
          }}
        />
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
