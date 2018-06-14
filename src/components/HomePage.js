import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import CommonComponent from './CommonComponent';
import { renderWithProps, renderHeader } from '../helpers'

export default class HomePage extends Component {
    static navigationOptions = () => {
      return {
        title: renderHeader('homeComp')
      };
    };
    constructor(props){
      super(props);
    }
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.instructions}>
            Home Page
          </Text>
          {renderWithProps('testComp', {...this.props, text:"Hello There"})}
          <Button
            title="Part of Home Component - Click to go to SignUp"
            onPress={() => this.props.navigation.navigate('SignUp')}
          />
          <CommonComponent />
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
      fontSize: 40
    }
  });
  