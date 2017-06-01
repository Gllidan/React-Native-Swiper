import React, { Component, PropTypes } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window');

const styles = {
  wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
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
  },

  image: {
    width,
    flex: 1
  }
};

export default class extends Component {

  // 用于定义暴露出去的属性的类型
  static propTypes = {
      imgArr: PropTypes.array
  };


  // 1. 定义固定不变的属性
  // 2. 定义属性暴露到外界
  static defaultProps = {
      // imgArr: []
  };

  render () {
      return (
        <Swiper
            style={styles.wrapper}
            height={200}
            // 当一页滚动结束
            onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
            dot={<View style={{backgroundColor: 'rgba(0,255,0,1)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
            activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
            paginationStyle={{
            bottom: 0, left: null, right: 10
          }}
          loop>
            {this.renderItem()}
        </Swiper>
    )
  }

  renderItem(){
      var itemArr = [];
      this.props.imgArr.forEach((value, index)=>{
          itemArr.push(
              <View
                  key={index}
                  style={styles.slide}
              >
                  <Image resizeMode='stretch' style={styles.image} source={value} />
              </View>
          )
      });
      return itemArr;
  }
}
