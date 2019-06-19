import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Switch } from 'react-native';
import { Colors, Metrics, Images } from '../../Themes';
import { Bubbles } from 'react-native-loader';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: false
    };
  }

  count() {
    const { answers } = this.props;
    const countTrue = answers.filter((response) => response.response === true);
    return countTrue.length;
  }

  render() {
    const { loading, navigation } = this.props;
    const { type } = this.state;
    return (
      <LinearGradient
        style={styles.container}
        style={styles.linearGradient}
        colors={Colors.backgroundGradient}
        start={{ x: 0, y: 0.0 }}
        end={{ x: 0, y: 1.0 }}
      >
        <View style={{ flex: 1, marginTop: Metrics.header, alignItems: 'center' }}>
          <Text style={styles.welcome}>WELCOM TO THE</Text>
          <Image
            source={Images.welcome}
            style={{ width: Metrics.screenWidth * 0.5, height: Metrics.screenWidth * 0.5, resizeMode: 'contain' }}
          />
          <View style={styles.descriptorContainer}>
            <Text style={styles.welcome}>You will be presented with 10 questions.</Text>

            <Text style={styles.welcome}>Can you score 100%?</Text>
          </View>
          <View style={styles.selectorContainer}>
            <Text style={styles.selectorText}>Multiple{'\n'}Choice</Text>
            <Switch
              value={this.state.type}
              onValueChange={(value) => {
                this.setState({ type: value }, () => {
                  console.log(type);
                });
              }}
              value={this.state.type}
              trackColor={Colors.accentColors[1]}
            />
            <Text style={styles.selectorText}>True / False</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            // option = type ?   'boolean': 'multiple';
            // console.log('option', option);
            navigation.navigate('Game', { type: type ? 'boolean' : 'multiple' });
          }}
          style={styles.playContainer}
        >
          <Text style={styles.playText}>BEGIN</Text>
        </TouchableOpacity>

        {loading && (
          <View style={styles.loading}>
            <Bubbles size={10} color={Colors.snow} />
          </View>
        )}
      </LinearGradient>
    );
  }
}
