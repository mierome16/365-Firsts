import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Categories from './Categories'
import Swipe from './Swipe'
import ReturningList from './Returning-List'
import HomeScreen from './HomeScreen';
import Completed from './Completed';

// const tabs = createBottomTabNavigator(
//     {
//       Home: { screen: HomeScreen },
//       Completed: { screen: Completed },
//       ReturningList: { screen: ReturningList },
//       Swipe: { screen: Swipe },
//     },
//     {
//       initialRouteName: 'Swipe'
//     }
//   );


 // export default createAppContainer(tabs)


const HomeTab = createStackNavigator({
    Home: HomeScreen
});
const CompletedTab = createStackNavigator({
    Completed: Completed
});
const ReturningCatTab = createStackNavigator({
  ReturningList: ReturningList
});
const SwipeTab = createStackNavigator({
  Swipe: Swipe
});

const Tabs = createBottomTabNavigator({
    Home: HomeTab,
    Completed: CompletedTab,
    Categories: ReturningCatTab,
    Swipe: SwipeTab
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: () => {
            const { routeName } = navigation.state;
            let tabName;
            tabName = routeName === 'Home' ? 'home' : routeName === 'Completed' ? 'check' : routeName === 'Swipe' ? 'like' : 'grid';
            return <Icon name={tabName} size={20} />
        }
    }),
    tabBarOptions: {
        activeTintColor: 'rgb(49,119,226)'
        // style: {
        //     backgroundColor: 'rgb(49,119,226)'
        // }
    }
});
export default createAppContainer(Tabs);