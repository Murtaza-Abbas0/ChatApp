import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import Colors from '../../styles/colors/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const InputField = ({ Label, Value, SetValue, Width, Height, BorderRadius, BackgroundColor, SecureTextEntry }) => {

    const stylesRecievedFromProp = {
        width: Width,
        height: Height,
        borderRadius: BorderRadius,
        backgroundColor: BackgroundColor,
        secureTextEntry: SecureTextEntry
    }

    const onChangeText = (val) => {
        console.log(val);
        SetValue(val)
    }

    return (
        <View>
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

export default InputField

const styles = StyleSheet.create({
    textInputContainer: {
        color: Colors.text,
        paddingStart: wp('4%')
    }
})