import { Metrics, Colors, Fonts } from '../../Themes';

export default {
  container: {
    flex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    backgroundColor: 'rgba(10,3,8,0.8)',
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: Metrics.screenHeight,
    width: Metrics.screenWidth,
    zIndex: 2000
  },

  selectorContainer: { flex: 0, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  selectorItem: {
    width: Metrics.screenWidth * 0.8,
    height: 30,
    backgroundColor: 'green',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontFamily: Fonts.type.base,
    color: Colors.dark,
    marginVertical: 20,
    fontSize: Fonts.size.medium,
    textAlignVertical: 'center',
    textAlign: 'center'
  },

  descriptorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  selectorText: {
    marginHorizontal: 20,
    fontFamily: Fonts.type.bold,
    color: Colors.dark,
    fontSize: Fonts.size.medium,
    textAlignVertical: 'center',
    textAlign: 'center'
  },
  playText: {
    fontFamily: Fonts.type.bold,
    color: Colors.dark,
    fontSize: Fonts.size.medium,
    textAlignVertical: 'center',
    textAlign: 'center'
  },
  playContainer: {
    flex: 0,
    height: 60,
    width: Metrics.screenWidth * 0.8,
    alignSelf: 'center',
    borderRadius: Metrics.borderRadius,
    marginVertical: Metrics.addFooter,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.accentColors[0],
    shadowColor: Colors.dark,
    shadowOffset: {
      width: 2,
      height: 1
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,

    elevation: 5
  },
  scoreContainer: {
    flex: 0,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scoreValue: {
    fontFamily: Fonts.type.bold,
    color: Colors.dark,
    fontSize: Fonts.size.h4,
    textAlignVertical: 'center',
    textAlign: 'center'
  },
  h4: {
    fontFamily: Fonts.type.bold,
    color: Colors.dark,
    fontSize: Fonts.size.h4,
    textAlignVertical: 'center',
    textAlign: 'center',
    paddingHorizontal: 50
  },
  p: {
    fontFamily: Fonts.type.bold,
    color: Colors.dark,
    fontSize: Fonts.size.medium,
    textAlignVertical: 'center',
    textAlign: 'center',
    paddingHorizontal: 50,
    color: Colors.accentColors[2]
  },
  _p: {
    fontFamily: Fonts.type.bold,
    color: Colors.dark,
    fontSize: Fonts.size.medium,
    textAlignVertical: 'center',
    textAlign: 'center',
    paddingHorizontal: 50,
    textDecorationLine: 'line-through',
    color: Colors.accentColors[1]
  },
  answerItem: {
    alignSelf: 'center',
    backgroundColor: Colors.background,
    borderRadius: Metrics.borderRadius,
    width: Metrics.screenWidth * 0.9,
    paddingVertical: 10,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    shadowColor: Colors.dark,
    shadowOffset: {
      width: 2,
      height: 1
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,

    elevation: 5
  },

  linearGradient: {
    flex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    justifyContent: 'center',
    alignItems: 'center'
  }
};
