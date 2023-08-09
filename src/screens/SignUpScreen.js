import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AlertMessage, Button, InputField, InputFieldWithImage } from '../components/atoms';
import Colors from '../styles/colors/Colors';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const SignUpScreen = () => {

    const navigation = useNavigation()

    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')
    const [isPasswordHidden, setIsPasswordHidden] = useState(true)

    const onPressSignUp = async () => {
        if (Password === ConfirmPassword && Username, Password != '') {
            const userRef = firestore().collection('Users').doc();

            firestore()
                .runTransaction(async (transaction) => {
                    await transaction.set(userRef, {
                        userName: Username.toLowerCase(),
                        password: Password,
                    });
                })
                .then(() => {
                    console.log('User added!');
                    AlertMessage.showMessage("Signed Up Sucessfully!")
                })
                .catch((error) => {
                    console.log('Transaction failed: ', error);
                    AlertMessage.showMessage(error)
                });
        } else {
            console.log('Passwords do not match');
        }
    };


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
                <InputFieldWithImage
                    Label={'Confirm Password'}
                    Value={ConfirmPassword}
                    SetValue={setConfirmPassword}
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
                Label={'Sign up'}
                MarginTop={wp('4%')}
                Color={Colors.primary}
                FontWeight={'500'}
                onPress={onPressSignUp}
            />
            <Text style={styles.textContainer} >Already have an account?</Text>
            <Button
                Height={wp('10%')}
                Width={wp('50%')}
                BorderRadius={wp('3%')}
                BackgroundColor={Colors.background}
                Label={'Login'}
                MarginTop={wp('4%')}
                Color={Colors.primary}
                FontWeight={'500'}
                onPress={() => navigation.navigate("LoginScreen")}
            />
        </View>
    )
}


export default SignUpScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    textFieldsContainer: {
        width: wp('100%'),
        height: wp('40%'),
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    textContainer: {
        marginTop: wp('3%'),
        color: 'white',
        fontSize: wp('4%')
    }
})