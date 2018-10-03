import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, Platform } from 'react-native';
import {colors} from "../styles";
import {createStackNavigator} from "react-navigation";
import Feed from "../Feed/feed";
import SettingsScreen from "./settings";
import {Button} from "react-native-elements";

type Props = {};
class UserHome extends Component<Props> {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'You',
            headerRight: (
                <Button
                    onPress={() => {
                        navigation.push('Settings')
                    }}
                    title="Settings"
                    titleStyle={{
                        color: colors.highlight2
                    }}
                    buttonStyle={{
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "transparent",
                        borderWidth: 0,
                        borderRadius: 5
                    }}
                />
            ),
        };
    };

    render() {
        return (
            <View style={{backgroundColor: colors.background_base}}>

            </View>
        );
    }
}

export const UserHomeStack = createStackNavigator({
    Search: {
        screen: UserHome
    },
    Settings: {
        screen: SettingsScreen
    }
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