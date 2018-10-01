import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';

import { HomeFeedStack } from './src/UI/Screens/home';
import {colors} from "./src/UI/styles";

const RootBottomBar = createBottomTabNavigator(
    {
        Home: HomeFeedStack,

    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'Settings') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                //return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: colors.highlight,
            inactiveTintColor: colors.highlight2,
            style: {
                backgroundColor: colors.background_base,
            },
            backgroundColor: colors.background_base,
        },

    }
);

export default class App extends Component {
    render() {
        return <RootBottomBar style={{backgroundColor: colors.background_base}} />
    }
}