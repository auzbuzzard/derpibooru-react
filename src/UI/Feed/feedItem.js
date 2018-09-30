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
                    originalHeight={Math.min(100 * this.props.data.size.height / this.props.data.size.width, 100 * Dimensions.get('window').height * 0.75)}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 5,
        width: Dimensions.get('window').width - 20,
        marginHorizontal: 10,
        marginVertical: 5,
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
