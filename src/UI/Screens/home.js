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

    static get options() {
        return {
            statusBar: {
                visible: true,
                style: "light",
                translucent: false,
            },
            topBar: {
                title: {
                    text: 'Home',

                }
            },
            bottomTab: {
                text: 'Home',
                textColor: colors.highlight2,
                selectedTextColor: colors.highlight,
            },
            layout: {
                orientation: ['portrait'] // An array of supported orientations
            },
        }
    }

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <View>
                <Feed />
            </View>
        );
    }
}

export const HomeFeedStack = createStackNavigator({
    Home: {
        screen: HomeFeed
    },
});