import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';

import FitImage from 'react-native-fit-image';

type Props = {};
export default class FeedItem extends Component<Props> {

    static defaultProps = {
        key: -1,
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.data.id.toString()}</Text>
                <FitImage
                    source={{uri: this.props.data.previewImageUrl}}
                    originalWidth={100}
                    originalHeight={100}
                />
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
    title: {

    },
    imageContainer: {
        flex: 1,
        alignItems: 'stretch',
        position: 'relative',
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
    }
});
