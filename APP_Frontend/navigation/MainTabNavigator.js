import {
  Dimensions
} from 'react-native';
import {
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import ForumsScreen from '../screens/ForumsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import NewsDetailScreen from '../screens/NewsDetailScreen';
import EmergencyContactsScreen from '../screens/EmergencyContactsScreen';
import StakeHoldersScreen from '../screens/StakeHoldersScreen';
import MigrationTypeScreen from '../screens/MigrationTypeScreen';
import GeneralInformationsScreen from '../screens/GenralInformationsScreen';
import PolicyViewScreen from '../screens/PolicyViewcreen';
import ForumDetailScreen from '../screens/ForumDetailScreen';
import SideBar from '../screens/SideBar';
import PolicyIndexScreen from '../screens/PolicyIndexScreen';
import EmergencyContactDetailScreen from '../screens/EmergencyContactDetailScreen';

export const defaultColors = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#279b23',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
}

const {
  width
} = Dimensions.get('window');

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    'NewsDetail': NewsDetailScreen
  },
  defaultColors);


const GroupForum = createStackNavigator({
    Forum: ForumsScreen,
    ForumDetail: ForumDetailScreen,
  },
  defaultColors
);


const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
    EmergencyContacts: EmergencyContactsScreen,
    StakeHolders: StakeHoldersScreen,
    MigrationTypes: MigrationTypeScreen,
    GeneralInfo: GeneralInformationsScreen,
    EmergencyContactDetail: EmergencyContactDetailScreen,
    Policies: PolicyViewScreen,
    'PolicyIndex': PolicyIndexScreen,
  },
  defaultColors

);


const MainTabNavigator = createDrawerNavigator({
  News: HomeStack,
  Forum: GroupForum,
  Help: SettingsStack,

}, {
  contentComponent: SideBar,
  drawerWidth: width - 100,
  contentOptions: {
    activeTintColor: 'orange'
  }
});



export default MainTabNavigator;