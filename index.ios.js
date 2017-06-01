/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// import XMGSwiperBasic from './XMGSwiperBasic';
// import Dynamic from './components/Dynamic'
// import LoadMinimal from './components/LoadMinimal'
// import Phone from './components/Phone'
// import PhotoView from './components/PhotoView';
import Swiper from './components/Swiper';

const dataArr = [
    require('./img/1.jpg'),
    require('./img/2.jpg'),
    require('./img/3.jpg'),
    require('./img/4.jpg')
];

export default class ASwiper extends Component {
  render() {
    return (
       <Swiper imgArr={dataArr}/>
    );
  }
}

AppRegistry.registerComponent('ASwiper', () => ASwiper);
