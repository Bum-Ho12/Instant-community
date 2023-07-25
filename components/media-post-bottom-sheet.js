import React, { useRef, useState } from 'react'
import {View, TouchableOpacity,Text,Button,StyleSheet} from 'react-native'
import BottomSheet,{BottomSheetView,BottomSheetModal} from '@gorhom/bottom-sheet'
import {Ionicons} from '@expo/vector-icons'
import {ChooseFromLibrary,PhotoFromCamera} from '../utilities/avatar-component'


const  MediaBottomSheet=({onClose})=>{
    const sheetRef = useRef(null)

    const snapPoints = ['30%']
    return(
        <BottomSheet
        ref = {sheetRef}
        snapPoints={snapPoints}
        onClose={onClose}
        >
            <TouchableOpacity style={styles.btn} onPress={PhotoFromCamera}>
                <Ionicons name='camera-outline' size={40} style={styles.icon}/>
                <Text style={styles.text}>Take a Camera photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={ChooseFromLibrary}>
                <Ionicons name='md-folder-open-outline' size={40} style={styles.icon}/>
                <Text style={styles.text}>Get From Device</Text>
            </TouchableOpacity>
        </BottomSheet>
    )
}

export default  MediaBottomSheet

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        margin: 2,
        padding: 5
    },
    text:{
        fontSize: 14,
        fontWeight: 'bold',
        paddingTop: 12
    },
    btn: {
        margin: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
    },
    icon:{
        color:'#2e64e5',
        marginRight: 5,
    }
})