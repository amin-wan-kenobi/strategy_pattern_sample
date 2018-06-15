import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import PartiallyRenderedComponent from './PartiallyRenderedComponent';
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
          <Text style={{textAlign: 'center', fontSize:16}}>
            Home page will contain a 1-Fixed Signup Button, 
            2-PartiallyRenderedComponent (always shows) and 
            3-ComponentWithProps which we decide to render or not
          </Text>
          <Button
            title="1-Fixed SignUp Button"
            onPress={() => this.props.navigation.navigate('SignUp')}
          />
          <PartiallyRenderedComponent />
          {renderWithProps('compWithProps', {...this.props, text:"HomeComponent Props"})}
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      padding: 10
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
      fontSize: 40
    }
  });
  