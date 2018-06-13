import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import { renderComponent } from '../helpers';

export default class App extends Component {
  render(){
    return(
      <RootStack />
    )
  }
} 

const RootStack = createStackNavigator({
    Home: {screen: renderComponent('homeComp')},
    SignUp: {screen: renderComponent('signUpComp')},
    Login: {screen: renderComponent('loginComp')}
  },
  {
    initialRouteName: 'Home'
  }
);
