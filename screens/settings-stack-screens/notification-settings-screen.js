import {React,useState} from 'react'
import {Ionicons} from '@expo/vector-icons';
import { GeneralText, HeaderText, InteractionWrapper, SettingCardContainer,
    SettingContainer, TextWrapper} from '../../styles/settings-style'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import Toggle from 'react-native-toggle-input'

const NotificationList=[
    {
        id:'1',
        name: 'Allow General Notifications',
        icon: 'notifications-circle-outline',
        definition: 'Show/Allow random notifications',
        isSet:true,
    },
    {
        id:'2',
        name: 'Allow connected notifications',
        icon: 'notifications-circle-outline',
        definition: 'Show/Allow only personal notifications',
        isSet:true,
    },
    {
        id:'3',
        name: 'Notification Audio',
        icon: 'volume-high-outline',
        definition: 'Enable sound notification',
        isSet:true,
    },
    {
        id:'4',
        name: 'Hide Content',
        icon: 'eye-outline',
        definition: 'Hide content of notifications',
        isSet:false,
    },
]

function SettingCard({item}){
    const [toggle, setToggle] = useState(item.isSet)
    return(
        <SettingCardContainer>
            <TouchableOpacity
            onPress={()=>{}}
            >
                <InteractionWrapper>
                    <Ionicons name={item.icon} size={30} />
                    <TextWrapper>
                        <HeaderText>{item.name}</HeaderText>
                        <GeneralText>{item.definition}</GeneralText>
                    </TextWrapper>
                    <Toggle toggle={toggle} setToggle={setToggle}
                        onTrue={() => {}} onFalse={() => {}}
                    />
                </InteractionWrapper>
            </TouchableOpacity>
        </SettingCardContainer>
    )
}

const NotificationSettingSection=({navigation})=>{
    return (
    <SettingContainer>
        <FlatList
        data={NotificationList}
        renderItem={({item})=> SettingCard({item,navigation})}
        />
    </SettingContainer>
    )
}

export default NotificationSettingSection
