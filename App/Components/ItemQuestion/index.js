import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import HTMLView from 'react-native-htmlview';

export default ({ item, index, selectAnswer }) => {
  return (
    <View key={`item${index}`} style={styles.container}>
      <View style={styles.categoryContainer}>
        <HTMLView value={`<p>Category:</p>`} stylesheet={styles} />
        <HTMLView value={`<h4>${item.category}</h4>`} stylesheet={styles} />
      </View>
      <View style={styles.questionContainer}>
        <HTMLView value={`<body>${item.question}</body>`} stylesheet={styles} />
        {false && <View style={{ width: '100%', height: '100%', backgroundColor: 'red', position: 'absolute' }} />}
      </View>
      <View style={styles.answersContainer}>
        {item.answers.map(function(answer, i) {
          return (
            <TouchableOpacity
              key={`item${answer}:${i}`}
              onPress={() => {
                selectAnswer();

                // if (answer == item.correct_answer) {
                //   console.log('isOK');
                // } else {
                //   validator = 2;
                //   console.log('isBad');
                // }
              }}
              style={styles.answerItem}
            >
              <HTMLView value={`<body>${answer}</body>`} stylesheet={styles} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};