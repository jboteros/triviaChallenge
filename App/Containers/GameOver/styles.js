import { Metrics, Colors, Fonts } from '../../Themes';

export default {
  container: {
    flex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: { flex: 1, width: Metrics.screenWidth, paddingBottom: 10 },
  loading: {
    backgroundColor: Colors.loader,
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: Metrics.screenHeight,
    width: Metrics.screenWidth,
    zIndex: 2000
  },
  scrollView:{ flex: 1, marginBottom:5, },
  score: {
    fontFamily: Fonts.type.base,
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
