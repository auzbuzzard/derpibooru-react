import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, Platform } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';

import Feed from '../Feed/feed';
import { colors } from "../styles";
import {DerpiSearch} from "../../backend/derpibooru";

class SearchFeedBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: ``
        };
    }

    searchOnClear = (text) => {
        console.log('clear', text)
    };

    searchOnEndEditing = (info) => {
        console.debug("end editing:", this.state.searchText);
        if (this.state.searchText === ``) return;
        let derpiSearch = new DerpiSearch(this.state.searchText, null, null);
        this.props.navigation.push('Result', {derpiSearch: derpiSearch});
    };

    render () {
        return (
            <SearchBar
                platform={Platform.OS !== 'android' && Platform.OS !== 'ios' ? 'default' : Platform.OS}
                searchIcon={{ color: colors.text }}
                cancelIcon={{ color: colors.text }}
                inputStyle={{
                    backgroundColor: colors.background_base,
                    color: colors.text,

                }}
                inputContainerStyle={{backgroundColor: colors.background_base}}
                containerStyle={{backgroundColor: colors.background_base}}
                onChangeText={(text) => this.setState({searchText: text})}
                onClear={this.searchOnClear}
                onEndEditing={this.searchOnEndEditing}
                placeholder='Search tags…'
                placeholderTextColor={colors.text}
            />
        );
    }
}

type Props = {};
class SearchFeed extends Component<Props> {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'search',
            header: <View paddingTop={44}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={colors.background_base}
                />
                <SearchFeedBar navigation={navigation}/>
            </View>,
        };
    };

    render() {
        return (
            <View style={{backgroundColor: colors.background_base}}>

            </View>
        );
    }
}



export const SearchFeedStack = createStackNavigator({
    Search: {
        screen: SearchFeed
    },
    Result: {
        screen: Feed
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