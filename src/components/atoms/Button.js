import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import Colors from '../../styles/colors/Colors'
const Button = ({ Label, Width, Height, BorderRadius }) => {

    const stylesRecievedFromProp = {
        width: Width,
        height: Height,
        borderRadius: BorderRadius
    }


    return (

        <TouchableOpacity style={[styles.buttonMainContainer, stylesRecievedFromProp]} >
            <Text style={styles.buttonTextContainer} >{Label}</Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    buttonMainContainer: {
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTextContainer: {
        color: Colors.text,
        alignSelf: 'center'
    }
})