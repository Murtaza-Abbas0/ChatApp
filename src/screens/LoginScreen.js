import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Button, InputField, InputFieldWithImage } from '../components/atoms';
import Colors from '../styles/colors/Colors';
import { useNavigation } from '@react-navigation/native';
import { getUsers, fetchUsers } from '../firebaseServices/getUsers';

const LoginScreen = () => {

    const navigation = useNavigation()

    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const [isPasswordHidden, setIsPasswordHidden] = useState(true)

    const onPressLogin = async () => {
        const users = getUsers();
        // console.log('Users:', users);
        for (let i = 0; i < users?.length; i++) {
            // console.log(users[i])
            if (Username === users[i]?.userName && Password === users[i]?.password) {
                console.log("user is valid");
                navigation.navigate("ChatScreen")
                setUsername('')
                setPassword('')
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
                onPress={() => onPressLogin()}
            />
            <Text style={styles.textContainer} >Don't have an account?</Text>
            <Button
                Height={wp('10%')}
                Width={wp('50%')}
                BorderRadius={wp('3%')}
                BackgroundColor={Colors.background}
                Label={'Sign up'}
                MarginTop={wp('4%')}
                Color={Colors.primary}
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
        backgroundColor: Colors.secondary,
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