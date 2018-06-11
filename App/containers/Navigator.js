import React from 'react'
import {StackNavigator,DrawerNavigator,SwitchNavigator } from 'react-navigation'
import ViewPager from './ViewPager'
export default Navi= StackNavigator({
    ViewPager:{screen:ViewPager},
},
{
    navigationOptions:{header:null}
}
)