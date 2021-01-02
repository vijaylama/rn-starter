import React from 'react'
import { Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        { name: 'Ram', age: 20 },
        { name: 'Shyam', age: 22 },
        { name: 'Hari', age: 23 },
        { name: 'Harke', age: 20 },
        { name: 'Sandesh', age: 72 },
        { name: 'Tufan', age: 30 },
        { name: 'Sarita', age: 40 },
        { name: 'Priya', age: 30 },
        { name: 'Neha', age: 25 },
        { name: 'Priyanka', age: 24 },
    ]
    return (
        <FlatList
            keyExtractor={(friend) => { friend.name }}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
            }}
        />
    )
}
const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    },
    flatList: {
        borderBottomColor: 'blue',
        padding: 6,
        fontSize: 20
    }
})

export default ListScreen;