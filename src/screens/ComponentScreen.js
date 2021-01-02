import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = "Vijay";
    return (
        <View>
            <Text style={styles.textStyle}>This is components screen</Text>
            <Text style={styles.subHeaderStyle}>My name is {name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }

});

export default ComponentsScreen;