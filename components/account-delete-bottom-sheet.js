import React, { useRef, useState } from 'react'
import {View, TouchableOpacity,Text,Button,StyleSheet} from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet'
import { HeaderText,GeneralText} from '../styles/settings-style'


const  DeleteBottomSheet=({onClose})=>{
    const sheetRef = useRef(null)

    const snapPoints = ['36%']
    return(
        <BottomSheet
        ref = {sheetRef}
        snapPoints={snapPoints}
        onClose={onClose}
        >
            <View style={styles.container}>
                <HeaderText>Before you Delete:</HeaderText>
                <GeneralText>if you Delete your account, you won't be able to recover it.
                    All your data will be erased from the system</GeneralText>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.text} >
                        Delete Account
                    </Text>
                </TouchableOpacity>
            </View>
        </BottomSheet>
    )
}

export default  DeleteBottomSheet

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        alignItems: 'center',
        padding: 12,
    },
    text:{
        fontSize: 14,
        fontWeight: 'bold',
        padding: 12,
        color: '#de4d41'
    },
    btn: {
        marginTop: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5e7ea',
        marginHorizontal: 20,
        borderRadius: 10,
    },
})