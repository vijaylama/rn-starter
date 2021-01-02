import React from 'react'
import { Text, Button, StyleSheet, Image, View } from 'react-native'

const ImageDetail = ({ title, imageSource, imageScore }) => {
    console.log(title)
    return (
        <View>

            <Image source={imageSource} />
            <Text>{title}</Text>
            <Text>{imageScore}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})


export default ImageDetail


