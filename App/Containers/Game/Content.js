import React, { Component } from 'react';
import { View } from 'react-native';
import { Colors, Metrics } from '../../Themes';
import { Bubbles } from 'react-native-loader';
import styles from './styles';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../Components/Header/Content';
import { Item } from '../../Components/ItemQuestion';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      activeSlide: 0
    };

    this.setAnswer = this.setAnswer.bind(this);
  }

  async componentDidMount() {
    const { getQuestions, setLoading, navigation } = this.props;
    const { type } = navigation.state.params;

    console.log('type:Game', type);
    setLoading(true);
    await getQuestions(type);
    setLoading(false);
  }

  async componentWillUnmount() {
    const { setAnswers } = this.props;
    await setAnswers([]);
  }
  async setAnswer(index, answer, response) {
    const { setAnswers, answers, questions, navigation } = this.props;
    await setAnswers([...answers, { response, answer }]);
    this._carousel.snapToNext();
    if (questions.questions.length - 1 == answers.length) {
      navigation.navigate('GameOver');
    } else {
    }
  }

  renderItem({ item, index }) {
    that = this;
    return (
      <Item
        item={item}
        index={index}
        onSelect={(index, answer, response) => {
          this.setAnswer(index, answer, response);
        }}
      />
    );
  }

  get pagination() {
    const { activeSlide } = this.state;
    const { questions } = this.props;
    return (
      <Pagination
        dotsLength={questions.questions.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.containerPagination}
        dotStyle={styles.dotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  render() {
    const { loading, questions } = this.props;
    return (
      <LinearGradient
        style={styles.container}
        style={styles.linearGradient}
        colors={Colors.backgroundGradient}
        start={{ x: 0, y: 0.0 }}
        end={{ x: 0, y: 1.0 }}
      >
        <Header />
        <Carousel
          loop={false}
          scrollEnabled={false}
          ref={(c) => {
            this._carousel = c;
          }}
          onSnapToItem={(index) => {
            this.setState({ activeSlide: index, currentTime: this.props.timeTraining });
          }}
          inactiveSlideScale={1.0}
          data={questions.questions}
          renderItem={this.renderItem.bind(this)}
          sliderWidth={Metrics.screenWidth}
          itemWidth={Metrics.screenWidth}
          sliderHeight={Metrics.screenHeight - Metrics.header}
          itemHeight={Metrics.screenHeight - Metrics.header}
        />
        {this.pagination}
        {loading && (
          <View style={styles.loading}>
            <Bubbles size={10} color={Colors.snow} />
          </View>
        )}
      </LinearGradient>
    );
  }
}
