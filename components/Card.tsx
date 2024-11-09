import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = (props) => {
    const { name, points, years } = props;
    return (
        <View>
            <Text>{name}</Text>
            <Text>{points}</Text>
            <Text>{years}</Text>
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({});
