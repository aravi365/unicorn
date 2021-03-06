import React from 'react';
import { View, Text } from 'react-native';
import {StackNavigator,DrawerNavigator,SwitchNavigator } from 'react-navigation'
import ViewPager from './App/containers/ViewPager'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import allReducers from './App/reducers'
import { Field,reduxForm } from 'redux-form'
import Registration from './App/Registration'
import Login from './App/containers/Login'
import WizardForm from './App/Registration/index'
import { Root } from "native-base";

console.disableYellowBox = true
const Navigator =  StackNavigator({
  Registration:{screen:WizardForm},
  Login:{screen:Login},
},
{
  navigationOptions:{header:null}
}
)

const store = createStore(allReducers)
export default class App extends React.Component{
  render(){
    return(
      <Root>
      <Provider store={store}>
    
          <Navigator />
       
      </Provider>
      </Root>
    )
  }
}