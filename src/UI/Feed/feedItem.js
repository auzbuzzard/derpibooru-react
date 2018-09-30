import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

type Props = {};
export default class FeedItem extends Component<Props> {

  static defaultProps = {
    key: -1,
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text>{this.props.data.id.toString()}</Text>
        <Text>{this.props.data.imageUrl}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    width: Dimensions.get('window').width - 20,
    margin: 10,
    padding: 3,
  },
});
