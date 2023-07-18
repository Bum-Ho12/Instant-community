import React, { useState } from 'react'
import {Ionicons} from '@expo/vector-icons'
import{ScrollView,View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native'
import FormButton from '../../components/form-button-component'
import FormInput from '../../components/formInput'
import AlternateSignIn from '../../components/alternate-sign-in buttons'



const LoginScreen=({navigation})=>{
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [isSecureEntry, setIsSecureEntry] = useState(true)
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Image source={require('../../assets/favicon.png')}
                    style={styles.logo}
                />
                <Text style={styles.txt} >Instant-community</Text>
                <FormInput
                    labelValue={email}
                    placeholder='Email'
                    icon='person-outline'
                    onChangedText = {(userEmail) => setEmail(userEmail)}
                    keyboardType = 'email-address'
                    autoCapitalize = 'none'
                    autoCorrect = {false}
                />
                <FormInput
                    labelValue={password}
                    placeholder='Password'
                    icon='ios-lock-closed-outline'
                    onChangedText = {(userPassword) => setPassword(userPassword)}
                    secureTextEntry = {isSecureEntry}
                />
                <FormButton
                    bTitle='Sign In'
                    onPress={()=>navigation.navigate('SignUp')}
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
                <AlternateSignIn
                    bTitle=' Sign in with Facebook'
                    bType='logo-facebook'
                    bColor='#4867aa'
                    bgColor='#e6eaf4'
                    onPress={()=>{}}
                />
                <AlternateSignIn
                    bTitle=' Sign in with Google'
                    bType='logo-google'
                    bColor='#de4d41'
                    bgColor='#f5e7ea'
                    onPress={()=>{}}
                />
                <TouchableOpacity style = {styles.forgotBtn}
                    onPress={()=>navigation.navigate('SignUp')}
                >
                    <Text style={styles.logBtnText}>
                        Don't have an account, Create one
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default LoginScreen

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
        fontSize: 28,
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