import { createStackNavigator } from 'react-navigation';
import Game from '../Containers/Game';
import GameOver from '../Containers/GameOver';
import Welcome from '../Containers/Welcome';
const AppNavigator = createStackNavigator(
  {
    Welcome: {
      screen: Welcome
    },
    Game: {
      screen: Game
    },
    GameOver: {
      screen: GameOver
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'Welcome',
    navigationOptions: {
      cardStack: {
        gesturesEnabled: false
      },
      tabBarVisible: false
    }
  }
);

export default AppNavigator;
