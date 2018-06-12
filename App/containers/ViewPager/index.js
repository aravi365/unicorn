import React, { Component } from 'react'
import { Icon } from 'native-base'
import { View, Text, Dimensions } from 'react-native'
import { PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator } from 'rn-viewpager';
const { width, height } = Dimensions.get('screen')
export default class ViewPager extends Component {
    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} />;
    }
    _renderTitleIndicator() {
        return <PagerTitleIndicator titles={['one', 'two', 'three']} />;
    }
    // _renderTabIndicator() {
    //     let tabs = [{
    //             text: 'Home',
    //             iconSource: require('../../imgs/ic_tab_circle.png'),
    //             selectedIconSource: require('../imgs/ic_tab_circle_slct.png')
    //         },{
    //             text: 'Message',
    //             iconSource: require('../../imgs/ic_tab_square.png'),
    //             selectedIconSource: require('../imgs/ic_tab_square_slct.png')
    //         },{
    //             text: 'Profile',
    //             iconSource: require('../../imgs/ic_tab_triangle.png'),
    //             selectedIconSource: require('../imgs/ic_tab_triangle_slct.png')
    //     }];
    //     return <PagerTabIndicator tabs={tabs} />;
    // }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <IndicatorViewPager
                    style={{ height: height*0.85 }}
                    indicator={this._renderTitleIndicator()}
                >
                    <View style={{ backgroundColor: 'cadetblue' }}>
                        <Text>page one</Text>
                    </View>
                    <View style={{ backgroundColor: 'cornflowerblue' }}>
                        <Text>page two</Text>
                    </View>
                    <View style={{ backgroundColor: 'yellow' }}>
                        <Text>page three</Text>
                    </View>
                </IndicatorViewPager>
              
            </View>

        );

    }

}