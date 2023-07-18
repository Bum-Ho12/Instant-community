import React from 'react'
import {Text, TouchableOpacity,StyleSheet} from'react-native'
import {styled} from 'styled-components'
import {windowHeight, windowWidth} from '../utilities/dimensions'

const FormButton = ({bTitle,...other})=>{
    return(
        <TouchableOpacity style={styles.button} {...other}>
            <Text style={styles.bText}>{bTitle}</Text>
        </TouchableOpacity>
    )
}

export default FormButton

const styles = StyleSheet.create({
    button:{
        marginTop:10,
        width: "100%",
        height: windowHeight/15,
        backgroundColor:'#2e64e5',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    bText:{
        fontSize: 12,
        fontWeight: 'bold',
        color: '#ffffff',
    }
});

const btn = styled.TouchableOpacity`
    margin-top: 10px;
    width: 100%;
    height:
`
