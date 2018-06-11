import React from 'react';
import { View, Text } from 'react-native';
import {StackNavigator,DrawerNavigator,SwitchNavigator } from 'react-navigation'
import ViewPager from './App/containers/ViewPager'

export default StackNavigator({
  ViewPager:{screen:ViewPager},
},
{
  navigationOptions:{header:null}
}
)
