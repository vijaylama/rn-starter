import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const onNameChange = (value) => {
        setName(value);
    }

    const onPassChange = (value) => {
        console.log(password);
        setPassword(value);
    }

    return (
        <View>
            <Text>Enter Name: </Text>
            <TextInput
                autoCapitalize="none"
                style={styles.textInput}
                autoCorrect={false}
                value={name}
                onChangeText={(newVal) => { onNameChange(newVal) }}
            />
            <Text>My name is {name}</Text>
            <TextInput
                secureTextEntry={true}
                autoCapitalize="none"
                style={styles.textInput}
                autoCorrect={false}
                value={password}
                onChangeText={(newVal) => { onPassChange(newVal) }}
            />
            {password.split('').length < 5 ? (<Text style={styles.errorText}>Your password should be maximum 5 characters in length</Text>) : null}
        </View>
    )
}
const styles = StyleSheet.create({
    textInput: {
        borderColor: '#444',
        borderWidth: 1,
        padding: 10,
        margin: 15
    },
    errorText: {
        margin: 15,
        color: 'red'
    }
})

export default TextScreen
