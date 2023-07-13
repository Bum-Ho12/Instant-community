import React from 'react'
import {Ionicons} from '@expo/vector-icons';
import{View,Text,TouchableOpacity,StyleSheet} from 'react-native'


const SignUpScreen=({navigation})=>{
    return (
        <View>
            <Text>Sign Up Screen View</Text>
                <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.button}
                >
                    <Ionicons.Button
                        name='checkmark-outline'
                        color={'#333'}
                        backgroundColor={'#2e64e515'}
                        style={{
                            alignContent:'center',
                            alignItems:'center',
                        }}
                        size={25}
                        onPress={()=>navigation.navigate('Instant-community')}
                    />
                </TouchableOpacity>
        </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2e64e515',
    },
});