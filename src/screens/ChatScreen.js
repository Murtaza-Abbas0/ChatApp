import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Header } from '../components/molecules'
import Colors from '../styles/colors/Colors'

const ChatScreen = () => {
    return (
        <View style={styles?.mainContainer} >
            <Header Label={'Chat Screen'} />
        </View>
    )
}

export default ChatScreen
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.background
    }
})