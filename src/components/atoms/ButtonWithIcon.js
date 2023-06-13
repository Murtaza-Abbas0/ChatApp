import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import Colors from '../../styles/colors/Colors'


const ButtonWithIcon = ({ Width, Height, BorderRadius, Icon, WidthForIcon, HeightForIcon }) => {

    const stylesRecievedFromProps = {
        width: Width,
        height: Height,
        borderRadius: BorderRadius,
    }

    const stylesRecievedFromPropsForIcon = {
        width: WidthForIcon,
        height: HeightForIcon,
    }

    return (
        <TouchableOpacity style={[styles.buttonMainContainer, stylesRecievedFromProps]} >
            <Image style={[styles.buttonIconContainer, stylesRecievedFromPropsForIcon]} source={Icon} />
        </TouchableOpacity>
    )
}

export default ButtonWithIcon;

const styles = StyleSheet.create({
    buttonMainContainer: {
        backgroundColor: Colors.primary,
        justifyContent:'center'
    },
    buttonIconContainer: {
        tintColor: 'white',
        alignSelf: 'center'
    }
})