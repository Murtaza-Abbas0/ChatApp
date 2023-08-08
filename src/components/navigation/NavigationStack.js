import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    LoginScreen,
    ChatScreen,
    SignUpScreen
} from '../../screens';

const Stack = createNativeStackNavigator();
const options = { headerShown: false }

function NavigatinStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={options} />
                <Stack.Screen name="ChatScreen" component={ChatScreen} options={options} />
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={options} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavigatinStack;