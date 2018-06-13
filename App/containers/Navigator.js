import React from 'react'
import {StackNavigator,DrawerNavigator,SwitchNavigator } from 'react-navigation'
import ViewPager from './ViewPager'
import Login from './Login'
export default Navi= StackNavigator({
    Login:{screen:Login},
    ViewPager:{screen:ViewPager},
},
{
    navigationOptions:{header:null}
}
)