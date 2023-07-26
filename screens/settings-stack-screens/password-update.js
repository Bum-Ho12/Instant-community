import React, { useState } from 'react'
import {Ionicons} from '@expo/vector-icons'
import{ScrollView,View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native'
import FormButton from '../../components/form-button-component'
import FormInput from '../../components/formInput'
import AlternateSignIn from '../../components/alternate-sign-in buttons'



const UpdatePasswordScreen=({navigation})=>{
    const [oldPassword,setOldPassword] = useState()
    const [newPassword,setNewPassword] = useState()
    const [confirmPassword,setConfirmPassword] = useState()
    const [isSecureEntry, setIsSecureEntry] = useState(true)
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.txt} >Set up a new password to replace the previous one</Text>
                <Text style={styles.txt} >Enter the Old password that you used before</Text>
                <FormInput
                    labelValue={oldPassword}
                    placeholder='Old Password'
                    icon='ios-lock-closed-outline'
                    onChangedText = {(oldPassword) => setOldPassword(oldPassword)}
                    secureTextEntry = {isSecureEntry}
                />
                <Text style={styles.txt} >Enter a new password</Text>
                <FormInput
                    labelValue={newPassword}
                    placeholder='New Password'
                    icon='ios-lock-closed-outline'
                    onChangedText = {(userPassword) => setNewPassword(userPassword)}
                    secureTextEntry = {isSecureEntry}
                />
                <Text style={styles.txt} >Confirm new password</Text>
                <FormInput
                    labelValue={confirmPassword}
                    placeholder='Confirm New Password'
                    icon='ios-lock-closed-outline'
                    onChangedText = {(userPassword) => setConfirmPassword(userPassword)}
                    secureTextEntry = {isSecureEntry}
                />
                <Text style={styles.txt} >The password should container 8 characters</Text>
                <Text style={styles.txt} >numbers{'(0-9)'}, special symbols{'(!@#$%-)'}, letters {'(capital and small)'}</Text>
                <FormButton
                    bTitle='Set New Password'
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

export default UpdatePasswordScreen

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