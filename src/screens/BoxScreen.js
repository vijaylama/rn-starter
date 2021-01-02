import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle1}></Text>
            <Text style={styles.textStyle2}></Text>

            <Text style={styles.textStyle3}></Text>

        </View>
    )
}
const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textStyle1: {
        borderWidth: 1,
        height: 100,
        width: 100,
        backgroundColor: 'red',
    },
    textStyle2: {
        borderWidth: 1,
        height: 100,
        width: 100,
        alignSelf: 'flex-end',
        backgroundColor: 'green',
    },
    textStyle3: {
        borderWidth: 1,
        height: 100,
        width: 100,
        backgroundColor: 'blue',

    }
})

export default BoxScreen
