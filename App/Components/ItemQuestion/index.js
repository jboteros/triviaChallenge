import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';
import HTMLView from 'react-native-htmlview';

export const Item = ({ item, index, onSelect }) => {
  return (
    <View key={`item${index}`} style={styles.container}>
      <View style={styles.categoryContainer}>
        <HTMLView value={`<p>Category:</p>`} stylesheet={styles} />
        <HTMLView value={`<h4>${item.category}</h4>`} stylesheet={styles} />
      </View>
      <View style={styles.questionContainer}>
        <HTMLView value={`<body>${item.question}</body>`} stylesheet={styles} />
      </View>
      <View style={styles.answersContainer}>
        {item.answers.map(function(answer, i) {
          return (
            <TouchableOpacity
              key={`item${answer}:${i}`}
              onPress={() => {
                onSelect(index, answer, answer == item.correct_answer);
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
