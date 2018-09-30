import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

import FeedItem from './feedItem';
import {DerpiFeed, DerpiImage} from '../../backend/derpibooru';

type Props = {};
export default class Feed extends Component<Props> {

    constructor(props) {
        super(props);
        this.derpiFeed = new DerpiFeed();
        this.state = {
            data: [],
            feedRefreshing: false
        };
    }

    updateData() {
        this.derpiFeed.getFeed().then(() => {
            let state = this.state;
            state.data = this.derpiFeed.feed.map((item) => {
                return {key: item.id.toString(), data: item};
            });
            state.feedRefreshing = false;
            this.setState(state);
        })
    }

    componentDidMount() {
        this.updateData()
    }

    onEndReached = (info) => {
        this.updateData()
    };

    onRefresh = () => {
        this.derpiFeed.reset();
        this.state.feedRefreshing = true;
        this.updateData();
    }

    render() {
        return (
            <FlatList contentContainterStyle={styles.flatList}
                      data={this.state.data}
                      renderItem={({item}) => <FeedItem key={item.key} data={item.data}/>}
                      onEndReached={this.onEndReached}
                      onRefresh={this.onRefresh}
                      refreshing={this.state.feedRefreshing}
            />
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
