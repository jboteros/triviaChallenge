import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { Images } from '../../Themes';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.Header}>
        <View style={styles.headerContainerL}>
          <TouchableOpacity onPress={() => {}} style={styles.item}>
            {/* <Image style={styles.logoHeader} source={Images.fav_icon} /> */}
          </TouchableOpacity>
        </View>
        <View style={styles.headerContainerC}>
          <TouchableOpacity onPress={() => {}} style={styles.item}>
            <Image style={styles.logoHeader} source={Images.logoHeader} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerContainerR}>
          <TouchableOpacity onPress={() => {}} style={styles.item}>
            {/* <Image style={styles.logoHeader} source={Images.logoHeader} /> */}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
