import React from 'react'
import {View,StyleSheet,TextInput} from 'react-native'
import { windowHeight, windowWidth } from '../utilities/dimensions';
import { InfoTitle, Divider,UserInfo} from '../styles/profile-edit'

const UserFormInput = ({title,label, placeholder,...rest}) =>{
    return(
        <View style={styles.container}>
            <InfoTitle>
                {title}
            </InfoTitle>
            <TextInput
            style= {[styles.inputField,
                {height: title=='About You'?
                    windowHeight/7:
                    windowHeight/15,
                }]}
                value={label}
                multiline = {title=='About You'?true:false}
                numberOfLines={title=='About You'?5:1}
                placeholderTextColor='#666'
                placeholder={placeholder}
                {...rest}
            />
            <Divider/>
        </View>
    )
}

export default UserFormInput

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        marginTop:5,
        marginBottom: 10,
        width: '100%',
        flexWrap: 'wrap',
        borderColor: '#ffffff',
        borderWidth: 0,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
    },
    text: {
        padding: 5,
        flex: 1,
        fontSize: 16,
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputField: {
        padding: 10,
        width: windowWidth/1.1,
        height: windowHeight/15,
        fontSize: 16,
        borderRadius: 8,
        borderColor: '#fff',
    },
})