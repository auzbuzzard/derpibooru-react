import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Dimensions, Image} from 'react-native';

import FitImage from 'react-native-fit-image';

import { colors } from "../styles";

type Props = {};
export default class FeedItem extends Component<Props> {

    static defaultProps = {
        key: -1,
    };

    render() {
        let maxOriginalHeight = (() => {
            const maxRatio = 2;
            let {height, width, ratio} = this.props.data.size;
            return ratio <= maxRatio ? height : width * maxRatio
        })();
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <FitImage
                        source={{uri: this.props.data.previewImageUrl}}
                        indicatorColor="white"
                        indicatorSize="large"
                        resizeMode={"contain"}
                        originalWidth={this.props.data.size.width}
                        originalHeight={maxOriginalHeight}
                    />
                    <View style={styles.imageOverlayContainer}>
                        <Text style={styles.imageOverlay}>{this.props.data.id.toString()}</Text>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        width: 300,
        marginHorizontal: '3%',
        marginVertical: 6,
        padding: 0,
        backgroundColor: colors.background_element,
        //shadowOpacity: 1,
        //shadowRadius: 5,
        overflow: 'hidden',

    },
    imageOverlayContainer: {
        position: 'absolute',
        bottom: 12,
        right: 12,
        shadowOpacity: 1,
        shadowRadius: 5,
        shadowColor: 'gray',
    },
    imageOverlay: {
        color: colors.text,
        padding: 10,
        borderRadius: 20,
        backgroundColor: 'green',
        overflow: 'hidden',
    },
});
