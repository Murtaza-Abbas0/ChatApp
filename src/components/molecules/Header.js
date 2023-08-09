import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../../styles/colors/Colors';

const Header = ({ Label }) => {
    return (
        <View style={styles?.mainContainer} >
            <Text style={styles?.headerTextContainer} >{Label}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.headerBackground,
        width: wp('100%'),
        height: wp('15%'),
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTextContainer: {
        color: Colors.text,
        fontSize: wp('4%'),
        fontWeight: 'bold'
    }
})