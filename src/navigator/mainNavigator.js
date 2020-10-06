import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile128806Navigator from '../features/UserProfile128806/navigator';
import Tutorial128805Navigator from '../features/Tutorial128805/navigator';
import NotificationList128777Navigator from '../features/NotificationList128777/navigator';
import Settings128776Navigator from '../features/Settings128776/navigator';
import Settings128768Navigator from '../features/Settings128768/navigator';
import UserProfile128766Navigator from '../features/UserProfile128766/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile128806: { screen: UserProfile128806Navigator },
Tutorial128805: { screen: Tutorial128805Navigator },
NotificationList128777: { screen: NotificationList128777Navigator },
Settings128776: { screen: Settings128776Navigator },
Settings128768: { screen: Settings128768Navigator },
UserProfile128766: { screen: UserProfile128766Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
