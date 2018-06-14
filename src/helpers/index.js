//Purely in charge of rendering components
//Only uses config file and allComponent files

import config from '../config';
import allComponents from '../config/all-components';

export const renderForNavigation = (whichComponent) => {
    //Refactor it with a default component
    let componentName = config[whichComponent].name;
    if(allComponents[componentName] && allComponents[componentName].type){
        return allComponents[componentName].type
    }
    // else
    //     return null
};

export const renderWithProps = (whichComponent, props) => {
    //Refactor it with a default component
    let componentName = config[whichComponent].name;
    let componentRender = config[whichComponent].render;
    if(allComponents[componentName] && componentRender){
        return {...allComponents[config[whichComponent].name], props: {...props}};
    }
    else
        return null
};

export const renderHeader = (whichComponent) => {
    return config[whichComponent].headerText;
}
