import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import Colors from '../../styles/colors/Colors'
const Button = ({ Label, Width, Height, BorderRadius, BackgroundColor, MarginTop, Color, FontWeight }) => {

    const stylesRecievedFromProp = {
        width: Width,
        height: Height,
        borderRadius: BorderRadius,
        backgroundColor: BackgroundColor,
        marginTop: MarginTop,
    }
    
    const stylesRecievedFromPropForLabel = {
        color: Color,
        fontWeight: FontWeight
    }

    return (

        <TouchableOpacity style={[styles.buttonMainContainer, stylesRecievedFromProp]} >
            <Text style={[styles.buttonTextContainer, stylesRecievedFromPropForLabel]} >{Label}</Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    buttonMainContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTextContainer: {
        color: Colors.text,
        alignSelf: 'center'
    }
})