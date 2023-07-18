import React from 'react'
import {Text, TouchableOpacity,StyleSheet,View} from'react-native'
import {styled} from 'styled-components'
import {Ionicons} from '@expo/vector-icons'
import {windowHeight, windowWidth} from '../utilities/dimensions'

const AlternateSignIn = ({bTitle,bColor,bType,bgColor,...other})=>{
    return(
        <TouchableOpacity
        style={[styles.button,{backgroundColor:bgColor}]} {...other}>
            <View style={styles.iconWrapper}>
                <Ionicons name={bType} size={22} style={[styles.icon,{color:{bColor}}]} />
            </View>
            <View style={styles.bTextWrapper} >
                <Text style={[styles.bText,{color: bColor}]}>{bTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default AlternateSignIn

const styles = StyleSheet.create({
    button:{
        marginTop:10,
        width: "100%",
        height: windowHeight/15,
        padding: 10,
        flexDirection: 'row',
        borderRadius: 3,
    },
    iconWrapper:{
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bTextWrapper:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon:{
        fontWeight: 'bold'
    },
    bText:{
        fontSize: 18,
        fontWeight: 'bold',
    }
});
