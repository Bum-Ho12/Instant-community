import React from 'react'
import {View, StyleSheet,TextInput,Text} from 'react-native'
import {styled} from 'styled-components'
import {Feather} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { windowHeight, windowWidth } from '../utilities/dimensions';

const CommentComponent = ({label, placeholder, ...rest})=>{
    return(
        <View style={styles.container}>
            <InteractionText>
                Comment
            </InteractionText>
            <TextInput style={styles.inputField}
                value={label}
                numberOfLines={1}
                placeholderTextColor='#666'
                placeholder={placeholder}
                {...rest}
            />
            <TouchableOpacity
            onPress={()=>{alert('Send this message')}}
            >
                <Feather name='send' size={24} color={'#2e64e5'}/>
            </TouchableOpacity>
        </View>
    )
}

export default CommentComponent

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
    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth/1.5,
        height: windowHeight/15,
        fontSize: 16,
        // borderRadius: 8,
        borderWidth: 0,
        borderColor: '#fff',
    }
})

const InteractionText = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color:#2e64e5;
    margin-top: 5px;
    margin-left: 5px;
`
