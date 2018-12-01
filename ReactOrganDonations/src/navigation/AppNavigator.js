import React from 'react';
import { createSwitchNavigator ,createAppContainer} from 'react-navigation';

import MainStackNavigator from './MainStackNavigator';

const AppNavigator = createAppContainer(MainStackNavigator);
export default AppNavigator;
