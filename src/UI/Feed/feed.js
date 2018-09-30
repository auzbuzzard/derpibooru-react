import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

import FeedItem from './feedItem';
import {DerpiFeed, DerpiImage} from '../../backend/derpibooru';

type Props = {};
export default class Feed extends Component<Props> {

  constructor(props) {
    super(props);
  
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    db = new DerpiFeed()
    db.getFeed().then(() => {
      state = this.state;
      console.log('feed', db.feed);

      state.data = db.feed.map((item) => {
        return {key: item.id.toString(), data: item};
      });
      this.setState(state);
      console.log(this.state)
    })
  }

  render() {
    return (
      <FlatList contentContainterStyle={styles.flatList}
        data={this.state.data}
        renderItem={({item}) => <FeedItem key={item.key} data={item.data}/>}
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
