import React from 'react'
import {Ionicons} from '@expo/vector-icons';
import {View, Text, Button,StyleSheet,TextInput} from 'react-native'
import { windowHeight, windowWidth } from '../utilities/dimensions';

const FormInput = ({label, placeholder, icon, ...rest}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.iconStyle}>
                <Ionicons name = {icon} size = {24}/>
            </View>
            <TextInput
            style= {styles.inputField}
                value={label}
                numberOfLines={1}
                placeholderTextColor='#666'
                placeholder={placeholder}
                {...rest}
            />
        </View>
    )
}

export default FormInput

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop:5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight/15,
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    iconStyle:{
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#ccc',
        borderRightWidth: 1,
        width: 50,
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
        borderWidth: 1,
        borderColor: '#fff',
    }
})