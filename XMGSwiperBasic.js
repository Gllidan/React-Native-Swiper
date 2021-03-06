/**
 * Created by xmg on 2017/6/1.
 */
import React from 'react'
import {
    Text,
    View
} from 'react-native'
// 引入框架
import Swiper from 'react-native-swiper'



export default () =>
    <Swiper
        style={styles.wrapper}
        showsButtons={false}
        // 显示指示器
        showsPagination={true}
        // 无限轮播
        loop
        autoplay
        autoplayTimeout={1}
        index={1}
    >
        <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
        </View>
    </Swiper>


const styles = {
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
};