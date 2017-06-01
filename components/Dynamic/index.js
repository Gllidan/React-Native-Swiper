import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
import Swiper from 'react-native-swiper'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
  }

  render () {
    // map 映射 由一个数组产生一个新的数组
    // 数据数组 映射  组件数组
    return (
      <Swiper showsButtons>
        {this.state.items.map((item, key) => {
          return (
            <View key={key} style={item.css}>
              <Text style={styles.text}>{item.title}</Text>
            </View>
          )
        })}
      </Swiper>
    )
  }

    componentDidMount () {
        this.setState({
            items: [
                { title: 'Hello Swiper', css: styles.slide1 },
                { title: 'Beautiful', css: styles.slide2 },
                { title: 'And simple', css: styles.slide3 }
            ]
        })
    }
}

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
