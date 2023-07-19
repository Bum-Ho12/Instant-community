import React,{useState} from 'react';
import {Image, ImageProps, StyleSheet, TouchableOpacity} from 'react-native'
import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker'

export const photoFromCamera=()=>{
    ImagePicker.openCamera({
        width: 400,
        height: 400,
        cropping: true
    }).then(image=>{
        console.log(image)
    })
}

export const chooseFromLibrary =()=>{
    ImagePicker.openPicker({
        width: 400,
        height: 400,
        cropping: true,
    }).then(image=>{
        console.log(image)
    })
}