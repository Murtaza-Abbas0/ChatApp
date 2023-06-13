import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ButtonWithIcon from '../components/atoms/ButtonWithIcon'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import InputField from '../components/atoms/InputField';
const ic_send = require("../assets/icons/ic_send.png")

const LoginScreen = () => {

    const [Username, setUsername] = useState('')

    return (
        <View style={styles.mainContainer} >
            <InputField
                Label={'Enter Username'}
                Value={Username}
                setValue={setUsername}
            />
        </View>
    )
}


export default LoginScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})