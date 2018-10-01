import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

import Feed from '../Feed/feed';
import { colors } from "../styles";

type Props = {};
export default class Search extends Component<Props> {

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

const styles = StyleSheet.create({
    flatList: {
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
});

