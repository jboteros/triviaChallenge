import { StyleSheet } from 'react-native';
import { Metrics, Fonts, Colors } from '../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: Metrics.screenWidth,
    paddingBottom: Metrics.addFooter
  },
  textCategory: {
    fontFamily: Fonts.type.bold,
    color: Colors.dark,
    fontSize: Fonts.size.h4,
    textAlignVertical: 'center',
    textAlign: 'center'
  },
  textQuestion: {
    fontFamily: Fonts.type.base,
    color: Colors.dark,
    fontSize: Fonts.size.medium,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: '400'
  },

  body: {
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: Fonts.type.base
  },

  h4: {
    fontFamily: Fonts.type.bold,
    color: Colors.dark,
    fontSize: Fonts.size.h4,
    textAlignVertical: 'center',
    textAlign: 'center',
    paddingHorizontal: 40
  },
  p: {
    fontFamily: Fonts.type.base,
    color: Colors.dark,
    fontSize: Fonts.size.medium,
    textAlignVertical: 'center',
    textAlign: 'center',
    paddingHorizontal: 50
  },
  categoryContainer: {
    marginTop: 20,

    alignItems: 'center',
    flexDirection: 'column'
  },
  questionContainer: {
    flex: 4,
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: Metrics.borderRadius,
    width: Metrics.screenWidth * 0.9,

    backgroundColor: Colors.snow,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  answersContainer: {
    // flex: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: Metrics.screenWidth * 0.5
  },
  answerItem: {
    backgroundColor: Colors.snow,
    borderRadius: Metrics.borderRadius,
    width: Metrics.screenWidth * 0.8,
    paddingVertical: 10,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
