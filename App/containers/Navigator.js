import React from 'react'
import {StackNavigator,DrawerNavigator,SwitchNavigator } from 'react-navigation'
import ViewPager from './ViewPager'
import Login from './Login'
import WizardForm from '../Registration/'
export default Navi= StackNavigator({
    WizardForm:{WizardForm},
    Login:{screen:Login},
    ViewPager:{screen:ViewPager},
},
{
    navigationOptions:{header:null}
}
)