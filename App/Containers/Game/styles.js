import { Metrics, Colors } from '../../Themes';

export default {
  container: {
    flex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  loading: {
    backgroundColor: 'rgba(10,3,8,0.8)',
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: Metrics.screenHeight,
    width: Metrics.screenWidth
    // zIndex: 2000
  },
  btnContainer: {
    marginVertical: 5,
    width: Metrics.screenWidth * 0.5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  },
  linearGradient: {
    flex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },

  paginationContainer: {
    //  height: Height * 0.06,
    width: Metrics.screenWidth,
    flex: 0,
    //  marginVertical: 5,
    // backgroundColor: 'purple', // ----------
    justifyContent: 'center'
  },
  dotContainerStyle: {
    borderColor: Colors.accentColors[0],
    borderWidth: 1,
    width: 6,
    height: 6,
    borderRadius: 5,
    marginRight: 8
  },
  dotStyle: {
    backgroundColor: Colors.accentColors[4],
    width: 6,
    height: 6,
    borderRadius: 5
  }
};
