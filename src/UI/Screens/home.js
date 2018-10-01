import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Feed from '../Feed/feed';
import { colors } from "../styles";

type Props = {};
class HomeFeed extends Component<Props> {

    static navigationOptions = {
        title: 'Home',
        header: null,
        // headerStyle: {
        //     backgroundColor: colors.background_base,
        // },
        // headerTintColor: colors.highlight,
        // headerTitleStyle: {
        //     fontWeight: 'bold',
        // },
    };

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <View>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={colors.background_base}
                />
                <Feed />
            </View>
        );
    }
}

export const HomeFeedStack = createStackNavigator({
    Home: {
        screen: HomeFeed
    },
}, {
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
    }
});