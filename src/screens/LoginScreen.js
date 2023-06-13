import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Button, InputField, InputFieldWithImage } from '../components/atoms';
import Colors from '../styles/colors/Colors';

const LoginScreen = () => {

    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const [isPasswordHidden, setIsPasswordHidden] = useState(true)


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
                <InputFieldWithImage
                    Label={'Password'}
                    Value={Password}
                    SetValue={setPassword}
                    Width={wp('85%')}
                    Height={wp('13%')}
                    BorderRadius={wp('2%')}
                    BackgroundColor={Colors.background}
                    onPressEyeButton={() => { setIsPasswordHidden(!isPasswordHidden) }}
                    SecureTextEntry={isPasswordHidden}
                    WidthForIcon={wp('5%')}
                    HeightForIcon={wp('5%')}
                />
            </View>
            <Button
                Height={wp('10%')}
                Width={wp('50%')}
                BorderRadius={wp('3%')}
                BackgroundColor={Colors.background}
                Label={'Login'}
                MarginTop={wp('4%')}
                Color={Colors.primary}
                FontWeight={'500'}
            />
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
        height: wp('40%'),
        alignItems: 'center',
        justifyContent: 'space-evenly',
    }

})