import React from 'react'
import { View,Text } from 'react-native'
import {Ionicons} from '@expo/vector-icons';
import { AddPostContainer, InputContainer, PostInputField,MediaContainer } from '../../styles/addPost-style'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { PhotoFromCamera,ChooseFromLibrary } from '../../utilities/avatar-component';



const OtherMedia = [
    {
        id:'1',
        name: 'camera',
        icon: 'ios-camera-outline',
        link: '',
    },
    {
        id:'2',
        name: 'documents',
        icon: 'folder-open-outline',
        link: '',
    },
    {
        id:'3',
        name: 'gallery',
        icon: 'image-outline',
        link: '',
    },
    {
        id:'4',
        name: 'video',
        icon: 'videocam-outline',
        link: '',
    },
    {
        id:'5',
        name: 'DropBox',
        icon: 'logo-dropbox',
        link: '',
    },
]

function MediaPostOptions({item}){
    return (
        <MediaContainer>
            <TouchableOpacity
            onPress={item.name=='camera'?
            PhotoFromCamera:item.name=='gallery'?
            ChooseFromLibrary:()=>{}}
            >
                <Ionicons.Button
                    name={item.icon}
                    size={40}
                    backgroundColor={'#2e64e515'}
                    color={'#2e64e5'}
                    onPress={()=>{}}
                />
            </TouchableOpacity>
        </MediaContainer>
    )
}

export default function PostScreen(){
    return(
        <AddPostContainer>
            <InputContainer>
            <PostInputField
                placeholder='Got something in your mind, Write a story'
                multiline
                numberOfLines={5}
            />
            </InputContainer>
            <FlatList
            data={OtherMedia}
            numColumns={3}
            keyExtractor={item=>item.id}
            renderItem={({item})=> MediaPostOptions({item})}
            />
        </AddPostContainer>
    )
}