import { createStackNavigator } from 'react-navigation';
import Loading from '../Containers/Loading';

const AppNavigator = createStackNavigator(
  {
    Loading: {
      screen: Loading
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'Loading',
    navigationOptions: {
      cardStack: {
        gesturesEnabled: false
      },
      tabBarVisible: false
    }
  }
);

export default AppNavigator;
