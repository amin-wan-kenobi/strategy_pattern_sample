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

  constructor(props){
    super(props);
    console.log('Props to Signup Canada', props)
  }

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
          title="Go to Customized Component2"
          onPress={() => {
            console.log(this.props); 
            this.props.navigation.navigate('Login', {param1: 'Hello There', param2: 'So What is happening?'})
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
