import { StyleSheet } from 'react-native';
import { Metrics, Fonts, Colors } from '../../Themes';

export default StyleSheet.create({
  Header: {
    paddingTop: Metrics.addHeader,
    backgroundColor: Colors.accentColors[2],
    width: Metrics.screenWidth,
    height: Metrics.header,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  logoHeader: {
    width: '90%',
    height: '80%',
    resizeMode: 'contain'
  },
  headerContainerL: {
    width: Metrics.screenWidth * 0.2,
    justifyContent: 'center'
  },
  headerContainerR: {
    width: Metrics.screenWidth * 0.2,
    justifyContent: 'center'
  },
  headerContainerC: {
    width: Metrics.screenWidth * 0.6,
    justifyContent: 'center'
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
