import React from 'react'
import { View, TextInput } from 'react-native';

const InputField = ({ Label, Value, setValue }) => {

    const onChangeText = (val) => {
        console.log(val)
        setValue(val)
    }

    return (
        <View>
            <TextInput
                placeholder={Label}
                value={Value}
                onChangeText={(val) => onChangeText(val)}
            />
        </View>
    )
}

export default InputField;