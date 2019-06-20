import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Colors, Metrics } from '../../Themes';
import { Bubbles } from 'react-native-loader';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../Components/Header/Content';
import HTMLView from 'react-native-htmlview';
import styles from './styles';

export default class GameOver extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  count() {
    const { answers } = this.props;
    const countTrue = answers.filter((response) => response.response === true);
    return countTrue.length;
  }

  render() {
    const { loading, questions, setLoading, answers, navigation } = this.props;
    return (
      <LinearGradient
        style={styles.container}
        style={styles.linearGradient}
        colors={Colors.backgroundGradient}
        start={{ x: 0, y: 0.0 }}
        end={{ x: 0, y: 1.0 }}
      >
        <Header />
        <View style={styles.content}>
          <View style={styles.scoreContainer}>
            <Text style={styles.score}>Your Score</Text>
            <Text style={styles.scoreValue}>
              {this.count()}/{questions.questions.length}
            </Text>
          </View>
          <ScrollView style={styles.scrollView}>
            {questions.questions.map(function(item, index) {
              const { response, answer } = answers[index];
              // console.log(response, answer);
              return (
                <View key={`item${item}:${index}`} style={styles.answerItem}>
                  <HTMLView value={`<body>${index + 1}) ${item.question}</body>`} stylesheet={styles} />
                  {response ? (
                    <>
                      <Text>Correct answer</Text>
                      <HTMLView value={`<p>${answer}</p>`} stylesheet={styles} />
                    </>
                  ) : (
                    <>
                      <Text>You answer</Text>
                      <HTMLView value={`<_p>${answer}</_p>`} stylesheet={styles} />
                      <Text>Correct answer</Text>
                      <HTMLView value={`<p>${item.correct_answer}</p>`} stylesheet={styles} />
                    </>
                  )}
                </View>
              );
            })}
          </ScrollView>
          <TouchableOpacity
            onPress={() => {
              // setLoading(true);

              navigation.navigate('Welcome');
            }}
            style={styles.playContainer}
          >
            <Text style={styles.playText}>PLAY AGAIN?</Text>
          </TouchableOpacity>
        </View>

        {loading && (
          <View style={styles.loading}>
            <Bubbles size={10} color={Colors.snow} />
          </View>
        )}
      </LinearGradient>
    );
  }
}
