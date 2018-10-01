import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';

import Feed from '../Feed/feed';
import { colors } from "../styles";
import {DerpiSearch} from "../../backend/derpibooru";

type Props = {};
class SearchFeed extends Component<Props> {

    static navigationOptions = {
        title: 'Search',
        // header: null,
        // headerStyle: {
        //     backgroundColor: colors.background_base,
        // },
        // headerTintColor: colors.highlight,
        // headerTitleStyle: {
        //     fontWeight: 'bold',
        // },
        // cardStyle: {
        //     backgroundColor: 'red',
        // }
    };

    render() {
        return (
            <View style={{backgroundColor: colors.background_base}}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={colors.background_base}
                />
                <SearchFeedBar navigation={this.props.navigation}/>
            </View>
        );
    }
}

class SearchFeedBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };
    }

    searchOnClear = (text) => {
        console.log('clear', text)
    };

    searchOnEndEditing = (info) => {
        console.debug("end editing:", this.state.searchText);
        let derpiSearch = new DerpiSearch(this.state.searchText, null, null);
        this.props.navigation.push('Result', {derpiSearch: derpiSearch});
    };

    render () {
        return (
            <SearchBar
            round
            searchIcon={{ size: 24 }}
            onChangeText={(text) => this.setState({searchText: text})}
            onClear={this.searchOnClear}
            onEndEditing={this.searchOnEndEditing}
            placeholder='Search tags…' />
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