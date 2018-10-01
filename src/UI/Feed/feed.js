import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';

import FeedItem, { FeedItemTest } from './feedItem';
import {DerpiFeed, DerpiImage} from '../../backend/derpibooru';
import uuidv4 from 'uuid';
import {colors} from "../styles";

type Props = {};
export default class Feed extends Component<Props> {

    constructor(props) {
        super(props);
        this.canRefresh = true;
        this.feedRefreshing = false;
        this.derpiFeed = new DerpiFeed();
        this.state = {
            data: [],
            endOfFeed: false,
        };
    }

    updateData() {
        this.canRefresh = false;
        this.feedRefreshing = true;
        this.derpiFeed.getFeed().then((pList) => {
            this.feedRefreshing = false;
            let newData = pList.map((item) => {
                return {key: uuidv4(), data: item};
            });
            this.setState({data: this.state.data.concat(newData)});
            console.log(this.state.data);
            this.canRefresh = true;
        })
    }

    componentDidMount() {
        this.updateData()
    }

    onEndReached = (info) => {
        if(!this.canRefresh) return;
        console.log('OnEndReached fdgjodijgiosjgpoijdfgposjgi');
        this.updateData()
    };

    onRefresh = () => {
        this.derpiFeed.reset();
        this.feedRefreshing = true;
        this.updateData();
    }

    render() {
        return (
            <SafeAreaView style={{backgroundColor: colors.background_base}}>
                <FlatList contentContainterStyle={styles.flatList}
                          data={this.state.data}
                          renderItem={({item}) => <FeedItem key={item.key} data={item.data}/>}
                          initialNumToRender={this.state.data.length}
                          onEndReached={this.onEndReached}
                          onEndReachedThreshold={0.2}
                          onRefresh={this.onRefresh}
                          refreshing={this.feedRefreshing}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    flatList: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background_base,
    },
});
