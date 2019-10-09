import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { Text, ScrollView, SafeAreaView } from 'react-native';
import Profile from './Profile';
import Settings from './Settings';
import Tabs from './Tabs'

//   const drawer = createDrawerNavigator({
//       Profile: { screen: Profile },
//       Settings: { screen: Settings }
//     },
//     {
//         drawerType: 'slide',

//     }
//   )



const drawer = createDrawerNavigator(
    {
        Tabs: Tabs,
    },
    {
        initialRouteName: 'Tabs',
        contentComponent: props => {
            return (
                <ScrollView>
                    <SafeAreaView
                    forceInset={{ top: 'always', horizontal: 'never' }}
                >
                    <Text
                        onPress={() => {
                        props.navigation.navigate('Profile');
                        props.navigation.closeDrawer();
                        }}
                    >
                        Profile
                    </Text>
                    <Text
                        onPress={() => {
                        props.navigation.navigate('Settings');
                        props.navigation.closeDrawer();
                        }}
                    >
                        Settings
                    </Text>
                    </SafeAreaView>
                </ScrollView>
            )
        }
    }
 );
 const Stack = createStackNavigator(
    {
        Drawer: {
            screen: drawer,
            navigationOptions: {
                header: null,
            },
        },
        Profile: Profile,
        Settings: {
            screen: Settings,
        }
    }
 );
export default createAppContainer(Stack);