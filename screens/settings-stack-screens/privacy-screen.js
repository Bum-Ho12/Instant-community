import React,{useState} from 'react'
import { SafeAreaView, StyleSheet, View,TouchableOpacity,ScrollView} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { GeneralText, HeaderText, InteractionWrapper, SettingCardContainer,
    SettingContainer, TextWrapper} from '../../styles/settings-style'
import DeleteBottomSheet from '../../components/account-delete-bottom-sheet'


const PrivacySection=({navigation})=>{
    const [isVisible, setIsVisible] = useState(false)

    const openBottomSheet = () => {
        setIsVisible(true)
    }

    const closeBottomSheet = () => {
        setIsVisible(false)
    }
    return (
    <SafeAreaView
    style={{ flex:1,backgroundColor:'#fff' }}
    >
        <View style={styles.container}>
            <ScrollView>
            <SettingCardContainer>
                <TouchableOpacity
                onPress={
                    ()=>navigation.navigate('UpdatePasswordSection')
                }
                >
                    <InteractionWrapper>
                        <Ionicons name='key-outline' size={30} />
                        <TextWrapper>
                            <HeaderText>Update Password</HeaderText>
                            <GeneralText>Change/Update Password</GeneralText>
                        </TextWrapper>
                    </InteractionWrapper>
                </TouchableOpacity>
            </SettingCardContainer>
            <SettingCardContainer>
                <TouchableOpacity
                onPress={
                    ()=>navigation.navigate('RecoveryScreen')
                }
                >
                    <InteractionWrapper>
                        <Ionicons name='file-tray-outline' size={30} />
                        <TextWrapper>
                            <HeaderText>Account Recovery</HeaderText>
                            <GeneralText>Recovery email or Tel Number</GeneralText>
                        </TextWrapper>
                    </InteractionWrapper>
                </TouchableOpacity>
            </SettingCardContainer>
            <SettingCardContainer>
                <TouchableOpacity
                onPress={
                    ()=>{}
                }
                >
                    <InteractionWrapper>
                        <Ionicons name='md-finger-print' size={30} />
                        <TextWrapper>
                            <HeaderText>Biometric Authentication</HeaderText>
                            <GeneralText>Enable FingerPrint Authentication</GeneralText>
                        </TextWrapper>
                    </InteractionWrapper>
                </TouchableOpacity>
            </SettingCardContainer>
            <SettingCardContainer>
                <TouchableOpacity
                onPress={
                    openBottomSheet
                }
                >
                    <InteractionWrapper>
                        <Ionicons name='remove-circle-outline' size={30} />
                        <TextWrapper>
                            <HeaderText>Delete Account</HeaderText>
                            <GeneralText>Permanent deletion of account</GeneralText>
                        </TextWrapper>
                    </InteractionWrapper>
                </TouchableOpacity>
            </SettingCardContainer>
            </ScrollView>
            {isVisible && (
                <TouchableOpacity
                style={styles.overlay}
                activeOpacity={1}
                onPress={closeBottomSheet}
                >
                    <DeleteBottomSheet onClose={closeBottomSheet} />
                </TouchableOpacity>
            )}
        </View>
    </SafeAreaView>
    )
}

export default PrivacySection

const styles =StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
    },
})
