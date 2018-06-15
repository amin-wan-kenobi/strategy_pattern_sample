# How to run
Download the project, run
```shell
npm install
```
When installation is done, run
```shell
react-native run-ios
```
or
```shell
react-native run-android
```
# How does the project work
## Config folder
### /config/all-components.js 
It holds the list of the components we have with a key in a json object. If you want a component to have flexibility and be associated with a config file you should add it to this file.
### /config/index.js 
It holds all the config for the project and the components. Project logo, splashscreen, colours and details of the components can be set here. We can decide if we want to render a component or not or what should be the header title of the component and many more.

## Helpers folder
### /helpers/index.js
This file is in charge of rendering components inside other components as well as React Native Navigation. 
`renderForNavigation` return back the Component for navigation purpose. So in this project, our navigation is also decided by the config file and which component should be loaded when we are navigating to a specific screen.
`renderWithProps` is used when we want to embed a component in another component and also decide if we want to show that embedded component or not. In addition to that, this function also receives the props from the parent component and pass them to the child component as it renders.
### helpers/strategy.js
It is very similar to what we had in `helpers.index` file but we use this mostly to render part of a component. So depends on the project, we decide if that part should be scanned or not. For instance if component in one project has a button, we decide if the button should be rendered or now. It also gets the details from the config file.