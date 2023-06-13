import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import ButtonWithIcon from '../components/atoms/ButtonWithIcon'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ic_send = require("../assets/icons/ic_send.png")

const LoginScreen = () => {
    return (
        <View style={styles.mainContainer} >
            <ButtonWithIcon
                Width={wp('10%')}
                Height={wp('10%')}
                BorderRadius={wp('2%')}
                Icon={ic_send}
                WidthForIcon={wp('5%')}
                HeightForIcon={wp('5%')}
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