import React, { useState } from 'react'
import {Ionicons} from '@expo/vector-icons'
import{ScrollView,View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native'
import FormButton from '../../components/form-button-component'
import FormInput from '../../components/formInput'
import AlternateSignIn from '../../components/alternate-sign-in buttons'



const SignUpScreen=({navigation})=>{
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [isSecureEntry, setIsSecureEntry] = useState(true)
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.txt} >
                    Create an account
                </Text>
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
                    bTitle='Sign Up'
                    onPress={()=>navigation.navigate('Instant-community')}
                />
                <TouchableOpacity style = {styles.forgotBtn}
                    onPress={()=>{
                        setIsSecureEntry(value=>!value)
                    }}
                >
                    <Text>{isSecureEntry?'Show':'Hide'} Password</Text>
                </TouchableOpacity>
                <View style={styles.termsAndConditions}>
                    <Text style={styles.tndText}>
                        By Registering, you hereby acknowledge our
                    </Text>
                    <TouchableOpacity
                        onPress={()=> alert('view terms and conditions')}>
                        <Text style={[styles.tndText,{color: '#e88832'}]}>
                            Terms of service
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.tndText}> and </Text>
                    <TouchableOpacity
                        onPress={()=> alert('view Privacy Policies')}>
                        <Text style={[styles.tndText,{color: '#e88832'}]}>
                            Privacy Policy
                        </Text>
                    </TouchableOpacity>
                </View>

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
                    onPress={()=>alert('Forgot Your Password')}
                >
                    <Text style={styles.logBtnText}>
                        Don't have an account, Create one
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    termsAndConditions:{
        flexDirection: 'row',
        flexWrap:'wrap',
        marginVertical: 35,
        justifyContent: 'center'
    },
    tndText:{
        fontSize: 13,
        fontWeight: '400',
        color: 'grey'
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