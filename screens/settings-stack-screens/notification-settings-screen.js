import {React,useState} from 'react'
import {Ionicons} from '@expo/vector-icons';
import { GeneralText, HeaderText, InteractionWrapper, SettingCardContainer,
    SettingContainer, TextWrapper} from '../../styles/settings-style'
import { View,StyleSheet } from 'react-native'
import Toggle from 'react-native-toggle-input'

const NotificationSettingSection=()=>{
    const [generalToggle, setGeneralToggle] = useState(true)
    const [personalToggle, setPersonalToggle] = useState(true)
    const [soundToggle, setSoundToggle] = useState(true)
    const [toggle, setToggle] = useState(false)
    return (
    <SettingContainer>
        <SettingCardContainer>
            <View style={styles.container}>
            <InteractionWrapper>
                    <Ionicons name={generalToggle?'notifications-circle-outline':'notifications-off-circle-outline'}
                    size={30} color={'#2e64e5'}/>
                    <TextWrapper>
                        <HeaderText>Allow General Notifications</HeaderText>
                        <GeneralText>{generalToggle?'Disable':'Show/Allow'} random notifications</GeneralText>
                    </TextWrapper>
                </InteractionWrapper>
                <Toggle toggle={generalToggle} setToggle={setGeneralToggle}
                    size={18} circleColor={'#2e64e5'} color={'#2e64e5'}
                />
            </View>
        </SettingCardContainer>
        <SettingCardContainer>
                <View style={styles.container}>
                <InteractionWrapper>
                    <Ionicons name={personalToggle?'notifications-circle-outline':'notifications-off-circle-outline'}
                    size={30} color={'#2e64e5'}/>
                    <TextWrapper>
                        <HeaderText>Allow connected notifications</HeaderText>
                        <GeneralText>{personalToggle?'Disable':'Show/Allow'} personal notifications</GeneralText>
                    </TextWrapper>
                </InteractionWrapper>
                <Toggle toggle={personalToggle} setToggle={setPersonalToggle}
                    size={18} circleColor={'#2e64e5'} color={'#2e64e5'}
                />
                </View>
        </SettingCardContainer>
        <SettingCardContainer>
                <View style={styles.container}>
                <InteractionWrapper>
                    <Ionicons name={soundToggle?'volume-high-outline':'volume-mute-outline'}
                    size={30} color={'#2e64e5'}/>
                    <TextWrapper>
                        <HeaderText>Notification Audio</HeaderText>
                        <GeneralText>{soundToggle?'Disable':'Enable'} sound notification</GeneralText>
                    </TextWrapper>
                </InteractionWrapper>
                <Toggle toggle={soundToggle} setToggle={setSoundToggle}
                    size={18} circleColor={'#2e64e5'} color={'#2e64e5'}
                />
                </View>
        </SettingCardContainer>
        <SettingCardContainer>
                <View style={styles.container}>
                    <InteractionWrapper>
                        <Ionicons name={toggle?'eye-outline':'eye-off-outline'}
                        size={30} color={'#2e64e5'}/>
                        <TextWrapper>
                            <HeaderText>{toggle?'Hide Content':'Show Content'}</HeaderText>
                            <GeneralText>Show/Hide content of notifications</GeneralText>
                        </TextWrapper>
                    </InteractionWrapper>
                    <Toggle toggle={toggle} setToggle={(status)=>{setToggle(status)}}
                        size={18} circleColor={'#2e64e5'} color={'#2e64e5'}
                    />
                </View>
        </SettingCardContainer>
    </SettingContainer>
    )
}

export default NotificationSettingSection

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignContent: 'flex-start',
        alignContent: 'space-between'
    }
})
