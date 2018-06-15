import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { renderHeader } from '../helpers'

export default class LoginCanada extends Component {
  static navigationOptions = () => {
    return {
      title: renderHeader('loginComp')
    };
  };
  render() {
    console.log('PROPS in Login Canada', this.props)
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Login Canada
        </Text>
        <Text style={styles.welcome}>
          Different Login Component
        </Text>
        {
          this.props.navigation.state.params ? 
            <View>
              <Text style={{textAlign: 'center'}}>
                First Param: {this.props.navigation.state.params.param1}
              </Text>
              <Text style={{textAlign: 'center'}}>
                Second Param: {this.props.navigation.state.params.param2}
              </Text>
            </View>
            :
            null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
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
