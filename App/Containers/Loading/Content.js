import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Images, Fonts, Colors, Metrics } from '../../Themes';
import { Bubbles } from 'react-native-loader';
import styles from './styles';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { jsxClosingElement } from '@babel/types';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../Components/Header/Content';
import ItemQuestion from '../../Components/ItemQuestion';

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      activeSlide: 0
    };

    this.setAnswer = this.setAnswer.bind(this);
  }

  async componentDidMount() {
    const { getQuestions, setLoading } = this.props;
    setLoading(true);
    await getQuestions();
    setLoading(false);
  }

  setAnswer() {
    console.log('selectAnswer');
  }

  _renderItem({ item, index }) {
    return (
      <ItemQuestion
        item={item}
        index={index}
        selectAnswer={this.setAnswer}
        // selectAnswer={() => {
        //   console.log('test');
        //   this.selectAnswer;
        // }}
      />
    );
  }

  render() {
    const { loading, questions, answers } = this.props;
    return (
      <LinearGradient
        style={styles.container}
        style={styles.linearGradient}
        colors={['rgb(180,180,180)', 'rgb(210,210,210)']}
        start={{ x: 0, y: 0.0 }}
        end={{ x: 0, y: 1.0 }}
      >
        <Header />
        <Carousel
          loop={false}
          // scrollEnabled={false}
          ref={(c) => {
            this._carousel = c;
          }}
          onSnapToItem={(index) => {
            this.setState({ activeSlide: index, currentTime: this.props.timeTraining });
          }}
          inactiveSlideScale={1.0}
          data={questions.questions}
          renderItem={this._renderItem}
          sliderWidth={Metrics.screenWidth}
          itemWidth={Metrics.screenWidth}
          sliderHeight={Metrics.screenHeight - Metrics.header}
          itemHeight={Metrics.screenHeight - Metrics.header}
        />
        <View style={{ flex: 0, marginBottom: Metrics.addFooter, backgroundColor: 'red' }}>
          <Text>{JSON.stringify(answers)}</Text>
          <Pagination
            dotsLength={questions.questions.length}
            activeDotIndex={this.state.activeSlide}
            containerStyle={styles.paginationContainer}
            dotColor={Colors.accentColors[1]}
            dotContainerStyle={styles.dotContainerStyle}
            dotStyle={styles.dotStyle}
            inactiveDotColor={'transparent'}
            inactiveDotOpacity={0}
          />
        </View>
        {loading && (
          <View style={styles.loading}>
            <Bubbles size={10} color={'#FFF'} />
          </View>
        )}
      </LinearGradient>
    );
  }
}
