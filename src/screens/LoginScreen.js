import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { InputField } from '../components/atoms';
import Colors from '../styles/colors/Colors';

const LoginScreen = () => {

    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')

    return (
        <View style={styles.mainContainer} >
            <View style={styles.textFieldsContainer} >
                <InputField
                    Label={'Username'}
                    Value={Username}
                    SetValue={setUsername}
                    Width={wp('85%')}
                    Height={wp('13%')}
                    BorderRadius={wp('2%')}
                    BackgroundColor={Colors.background}
                />
                <InputField
                    Label={'Password'}
                    Value={Password}
                    SetValue={setPassword}
                    Width={wp('85%')}
                    Height={wp('13%')}
                    BorderRadius={wp('2%')}
                    BackgroundColor={Colors.background}
                    SecureTextEntry={true}
                />
            </View>
        </View>
    )
}


export default LoginScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.secondary,
    },
    textFieldsContainer: {
        width: wp('100%'),
        height: wp('50%'),
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }

})