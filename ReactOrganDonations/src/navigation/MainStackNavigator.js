import { createStackNavigator } from 'react-navigation';
import DetailScreen from '../screens/DetailScreen';
import MainScreen from '../screens/MainScreen';
//import BottomTabNavigator from './BottomTabNavigator';

export default createStackNavigator(
  {
    MainScreen: {
      screen: MainScreen,
      navigationOptions: {
        title: 'Main Screen',
      },
    },
    DetailExplore: {
      screen: DetailScreen,
      navigationOptions: {
        title: 'Explore Screen',
      },
    },
  },
  {
    initialRouteName: 'MainScreen',
    headerMode: 'none',
  }
);
