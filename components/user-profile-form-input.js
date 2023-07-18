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
            style= {styles.inputField}
                value={label}
                numberOfLines={1}
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
        height: windowHeight/15,
        borderColor: '#ffffff',
        borderWidth: 0,
        flexDirection: 'column',
        backgroundColor: '#ffffff'
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
        // marginTop: 5,
        // marginBottom: 10,
        width: windowWidth/1.5,
        height: windowHeight/15,
        fontSize: 16,
        borderRadius: 8,
        borderColor: '#fff',
    }
})