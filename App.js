import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';

import { HomeFeedStack } from './src/UI/Screens/home';
import {SearchFeedStack} from "./src/UI/Screens/search";
import {colors} from "./src/UI/styles";
import {UserHomeStack} from "./src/UI/Screens/user";

const RootBottomBar = createBottomTabNavigator(
    {
        Home: HomeFeedStack,
        Search: SearchFeedStack,
        User: UserHomeStack,
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: colors.background_base,
            },
            headerTintColor: colors.highlight,
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
        cardStyle: {
            backgroundColor: colors.background_base,
        },

        tabBarOptions: {
            activeTintColor: colors.highlight,
            inactiveTintColor: colors.highlight2,
            style: {
                backgroundColor: colors.background_base,
            },
        },

    }
);

export default class App extends Component {
    render() {
        return <RootBottomBar style={{backgroundColor: colors.background_base}} />
    }
}