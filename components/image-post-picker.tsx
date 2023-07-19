import React from 'react'
import {} from 'react-native'
import {ImageOrVideo} from 'react-native-image-crop-picker'
import { Avatar } from './avatar-component';


const ImageSelector=({option})=>{
    const onAvatarChange = (image: ImageOrVideo) => {
        console.log(image);
        // upload image to server here
    };
    return (
      <Avatar
        onChange={onAvatarChange}
        source={require('./avatar-placeholder.png')}
      />
);
}