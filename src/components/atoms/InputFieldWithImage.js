import React from 'react'
import { TextInput, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Colors from '../../styles/colors/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ic_send = require('../../assets/icons/ic_send.png')
const InputFieldWithImage = ({ Label, Value, SetValue, Width, Height, BorderRadius, BackgroundColor, SecureTextEntry, WidthForIcon, HeightForIcon, Right, Top, onPressEyeButton }) => {

    const stylesRecievedFromProp = {
        width: Width,
        height: Height,
        borderRadius: BorderRadius,
        backgroundColor: BackgroundColor,
        secureTextEntry: SecureTextEntry
    }

    const stylesRecievedFromPropForIcon = {
        width: WidthForIcon,
        height: HeightForIcon,
        right: Right,
        top: Top
    }

    const onChangeText = (val) => {
        console.log(val);
        SetValue(val)
    }

    return (
        <View>
            <TouchableOpacity onPress={() => onPressEyeButton()} style={styles.imageButtonContainer} >
                <Image source={ic_send} style={[styles.imageContainer, stylesRecievedFromPropForIcon]} />
            </TouchableOpacity>
            <TextInput
                style={[styles.textInputContainer, stylesRecievedFromProp]}
                placeholder={Label}
                value={Value}
                onChangeText={(val) => onChangeText(val)}
                secureTextEntry={SecureTextEntry}
            />
        </View>
    )
}

export default InputFieldWithImage

const styles = StyleSheet.create({
    textInputContainer: {
        color: Colors.text,
        paddingStart: wp('4%')
    },
    imageButtonContainer: {
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        zIndex: 1000,
        top: wp('9%'),
        right: wp('2%'),
    },
    imageContainer: {
        // backgroundColor: 'pink'
    }
})