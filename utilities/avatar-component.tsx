import React,{useState} from 'react';
import * as ImagePicker from 'expo-image-picker'

export const ChooseFromLibrary=()=>{
    ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing:true,
        aspect:[4,3],
        quality: 1,
    })
}

export const PhotoFromCamera =()=>{
    ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect:[4,3],
        quality: 1,
    })
}