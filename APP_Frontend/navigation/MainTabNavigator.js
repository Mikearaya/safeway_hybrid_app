import {
  Dimensions
} from 'react-native';
import {
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import ForumsScreen from '../screens/ForumsScreen';
import ArticlesScreen from '../screens/ArticlesScreen';
import NewsDetailScreen from '../screens/NewsDetailScreen';
import EmergencyContactsScreen from '../screens/EmergencyContactsScreen';
import ArticleScreen from '../screens/ArticleScreen';
import ForumDetailScreen from '../screens/ForumDetailScreen';
import SideBar from '../screens/SideBar';
import EmergencyContactDetailScreen from '../screens/EmergencyContactDetailScreen';
import AgenciesListScreen from '../screens/AgenciesListScreen';
import AgencyDetailScreen from '../screens/AgencyDetailScreen';
import SchoolsListScreen from '../screens/SchoolsListScreen';
import SchoolDetailScreen from '../screens/SchoolDetailScreen';
import HospitalsListScreen from '../screens/HospitalsListScreen';
import HospitalDetailScreen from '../screens/HospitalDetailScreen';
import ArticleIndexScreen from '../screens/ArticleIndexScreen';

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
    'NewsDetail': NewsDetailScreen,
    'AgenciesList': AgenciesListScreen,
    'AgencyDetail': AgencyDetailScreen,
    'SchoolsList': SchoolsListScreen,
    'SchoolDetail': SchoolDetailScreen,
    'HospitalsList': HospitalsListScreen,
    'HospitalDetail': HospitalDetailScreen
  },
  defaultColors);


const GroupForum = createStackNavigator({
    Forum: ForumsScreen,
    ForumDetail: ForumDetailScreen,
  },
  defaultColors
);


const SettingsStack = createStackNavigator({
    Articles: ArticlesScreen,
    EmergencyContacts: EmergencyContactsScreen,
    EmergencyContactDetail: EmergencyContactDetailScreen,
    Article: ArticleScreen,
    'ArticleIndex': ArticleIndexScreen,
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