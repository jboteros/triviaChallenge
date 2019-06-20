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
    backgroundColor: Colors.loader,
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: Metrics.screenHeight,
    width: Metrics.screenWidth,
    zIndex: 2000
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.92)'
  },
  containerPagination: { width: Metrics.screenWidth * 0.1, alignSelf: 'center' },
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

  dotStyle: {
    backgroundColor: Colors.accentColors[4],
    width: 6,
    height: 6,
    borderRadius: 5
  }
};
