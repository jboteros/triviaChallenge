import { Metrics, Colors, Fonts } from '../../Themes';

export default {
  container: {
    flex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerItems: { flex: 1, marginTop: Metrics.header, paddingBottom: 10, alignItems: 'center' },
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
  logo: {
    width: Metrics.screenWidth * 0.6,
    height: Metrics.screenWidth * 0.6,
    resizeMode: 'contain',
    marginTop: 10
  },
  selectorContainer: { flex: 0, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical:20 },

  welcome: {
    fontFamily: Fonts.type.base,
    color: Colors.dark,
    marginVertical: 10,
    marginHorizontal: 20,
    fontSize: Fonts.size.h6,
    textAlignVertical: 'center',
    textAlign: 'center'
  },

  developed: {
    fontFamily: Fonts.type.base,
    color: Colors.dark,
    marginTop: 10,
    // marginVertical: 10,
    marginHorizontal: 20,
    marginBottom: 30,
    fontSize: Fonts.size.small,
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
  btnText: {
    fontFamily: Fonts.type.bold,
    color: Colors.dark,
    fontSize: Fonts.size.medium,
    textAlignVertical: 'center',
    textAlign: 'center'
  },
  btnContainer: {
    flex: 0,
    height: 60,
    width: Metrics.screenWidth * 0.8,
    alignSelf: 'center',
    borderRadius: Metrics.borderRadius,
    marginVertical: Metrics.addFooter*2,

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
  linearGradient: {
    flex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    justifyContent: 'center',
    alignItems: 'center'
  }
};
