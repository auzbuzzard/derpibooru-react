import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';

import Feed from '../Feed/feed';
import { colors } from "../styles";

type Props = {};
export default class HomeFeed extends Component<Props> {

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
    container: {
        width: '100%',
    },
});

