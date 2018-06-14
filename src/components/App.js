import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import { renderForNavigation } from '../helpers';

export default class App extends Component {
  render(){
    return(
      <RootStack />
    )
  }
} 

const RootStack = createStackNavigator({
    Home: {screen: renderForNavigation('homeComp')},
    SignUp: {screen: renderForNavigation('signUpComp')},
    Login: {screen: renderForNavigation('loginComp')}
  },
  {
    initialRouteName: 'Home'
  }
);
