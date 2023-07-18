import React from 'react'
import {View,StyleSheet,TextInput} from 'react-native'
import { windowHeight, windowWidth } from '../utilities/dimensions';
import { InfoTitle, Divider } from '../styles/profile-edit'

const UserFormInput = ({label, placeholder,...rest}) =>{
    return(
        <View style={styles.container}>
            <InfoTitle>
                First Name
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
        alignItems: 'center',
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
        padding: 10,
        flex: 1,
        fontSize: 16,
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth/1.5,
        height: windowHeight/15,
        fontSize: 16,
        borderRadius: 8,
        borderColor: '#ffffff',
    }
})