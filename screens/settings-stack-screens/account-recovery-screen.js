import React, { useState } from 'react'
import {Ionicons} from '@expo/vector-icons'
import{ScrollView,View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native'
import FormButton from '../../components/form-button-component'
import FormInput from '../../components/formInput'
import AlternateSignIn from '../../components/alternate-sign-in buttons'



const RecoveryScreen=({navigation})=>{
    const [email,setEmail] = useState()
    const [newPassword,setNewPassword] = useState()
    const [isSecureEntry, setIsSecureEntry] = useState(true)
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.txt} >Set up a recovery contact</Text>
                <Text style={styles.txt} >the recovery contact can be your email or phone number</Text>
                <FormInput
                    labelValue={email}
                    placeholder='Email or Phone Number'
                    icon='person-outline'
                    onChangedText = {(userEmail) => setEmail(userEmail)}
                    keyboardType = 'email-address'
                    autoCapitalize = 'none'
                    autoCorrect = {false}
                />
                <Text style={styles.txt} >Enter your password for validation</Text>
                <FormInput
                    labelValue={newPassword}
                    placeholder='Password'
                    icon='ios-lock-closed-outline'
                    onChangedText = {(userPassword) => setNewPassword(userPassword)}
                    secureTextEntry = {isSecureEntry}
                />
                <Text style={styles.txt} >Wait for email of phone number verification</Text>
                <FormButton
                    bTitle='Set Recovery as recovery'
                    onPress={()=>{}}
                />
                <TouchableOpacity style = {styles.forgotBtn}
                    onPress={()=>{
                        setIsSecureEntry(value=>!value)
                    }}
                >
                    <Text>{isSecureEntry?'Show':'Hide'} Password</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.forgotBtn}
                    onPress={()=>alert('Forgot Your Password')}
                >
                    <Text style={styles.logBtnText}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default RecoveryScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    logo: {
        height: 50,
        width: 50,
        resizeMode: 'cover',
    },
    txt:{
        fontSize: 14,
        marginBottom: 10,
        color: '#051d5f'
    },
    logBtn: {
        marginTop: 15
    },
    forgotBtn: {
        marginVertical: 35,
    },
    logBtnText:{
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
    },
});