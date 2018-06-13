import React from 'react';
import HomePage from '../components/HomePage';
import SignUpFrance from '../components/SignUpFrance';
import SignUpCanada from '../components/SignUpCanada';
import LoginFrance from '../components/LoginFrance';
import LoginCanada from '../components/LoginCanada';

import config from '../config';

const allComponents = {
    HomePage: <HomePage />,//React.createFactory(HomePage),
    SignUpFrance: <SignUpFrance />,//React.createFactory(SignUpFrance),
    SignUpCanada: <SignUpCanada />,//React.createFactory(SignUpCanada),
    LoginCanada: <LoginCanada />,//React.createFactory(LoginCanada),
    LoginFrance: <LoginFrance />//React.createFactory(LoginFrance)
}

export const renderComponent = (whichComponent) => {
    //Refactor it with a default component
    if(allComponents[config[whichComponent]]){
        return allComponents[config[whichComponent]].type
    }
    else
        return null
};

export const renderWithProps = (whichComponent, props) => {
    //Refactor it with a default component
    if(allComponents[config[whichComponent]]){
        //let myComp = {...allComponents[config[whichComponent]], props: {...props}};
        return {...allComponents[config[whichComponent]], props: {...props}};
        //return myComp
    }
    else
        return null
};
