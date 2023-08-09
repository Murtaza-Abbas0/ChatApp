import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AlertMessage, Button, InputField, InputFieldWithImage } from '../components/atoms';
import Colors from '../styles/colors/Colors';
import { useNavigation } from '@react-navigation/native';
import { getUsers, fetchUsers } from '../firebaseServices/getUsers';

const LoginScreen = () => {

    const navigation = useNavigation()

    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const [isPasswordHidden, setIsPasswordHidden] = useState(true)

    const onPressLogin = async () => {
        await fetchUsers()
        const users = getUsers();
        if (Username === '' || Password === '') {
            console.log(Username, Password);
            AlertMessage.showMessage("Username Or Password Is Empty!")
            return
        }
        for (let i = 0; i < users?.length; i++) {
            if (Username === users[i]?.userName && Password === users[i]?.password) {
                navigation.navigate("ChatScreen")
                setUsername('')
                setPassword('')
                setIsPasswordHidden(true)
                return AlertMessage.showMessage("Logged In Sucessfully!")
            } else {
                return AlertMessage.showMessage("Invalid Credentials!")
            }
        }
    }


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
                    BackgroundColor={Colors.primary}
                />
                <InputFieldWithImage
                    Label={'Password'}
                    Value={Password}
                    SetValue={setPassword}
                    Width={wp('85%')}
                    Height={wp('13%')}
                    BorderRadius={wp('2%')}
                    BackgroundColor={Colors.primary}
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
                BackgroundColor={Colors.primary}
                Label={'Login'}
                MarginTop={wp('4%')}
                Color={Colors.background}
                FontWeight={'500'}
                onPress={() => onPressLogin()}
            />
            <Text style={styles.textContainer} >Don't have an account?</Text>
            <Button
                Height={wp('10%')}
                Width={wp('50%')}
                BorderRadius={wp('3%')}
                BackgroundColor={Colors.primary}
                Label={'Sign up'}
                MarginTop={wp('4%')}
                Color={Colors.background}
                FontWeight={'500'}
                onPress={() => navigation.navigate("SignUpScreen")}
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