import React, { Component } from 'react';
import {StyleSheet, Text, View, SafeAreaView, FlatList, SectionList } from 'react-native';
import {colors} from "../styles";

type Props = {};
export default class SettingsScreen extends Component<Props> {

    render() {
        return (
            <SectionList
                renderItem={({item, index, section}) => {
                    return (
                        <View style={[styles.sectionItem, index === 0 && styles.sectionItemFirst]}>
                            <Text style={styles.sectionItemText} key={index}>
                                {item}
                            </Text>
                        </View>
                    );
                }}
                renderSectionHeader={({section: {title}}) => (
                    <Text style={styles.sectionHeader}>{title}</Text>
                )}
                sections={[
                    {title: 'FILTERS', data: ['Filters']},
                ]}
                keyExtractor={(item, index) => item + index}
            />
        );
    }
}

const styles = StyleSheet.create({
    sectionHeader: {
        color: colors.text,
        paddingHorizontal: '3%',
        paddingTop: 16,
        marginBottom: 8,
        backgroundColor: colors.background_base,
    },
    sectionItemFirst: {
        borderTopWidth: 1,
        borderTopColor: colors.background_element,
    },
    sectionItem: {
        paddingHorizontal: '3%',
        paddingVertical: 4,
        borderBottomWidth: 1,
        borderBottomColor: colors.background_element,
    },
    sectionItemText: {
        paddingHorizontal: '3%',
        paddingVertical: 8,
        color: colors.text,
    }
});
