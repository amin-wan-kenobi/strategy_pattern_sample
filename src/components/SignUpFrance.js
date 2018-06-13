import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';


export default class SignUpFrance extends Component {
  constructor(props){
    super(props);
    console.log('Props to Signup France', props)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Sign UP France
        </Text>
        <Button 
          onPress={() => this.props.navigation.navigate('Login')}
          title="Have Account?"
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
