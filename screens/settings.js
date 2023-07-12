import {React} from 'react'
import {Ionicons} from '@expo/vector-icons';
import { GeneralText, HeaderText, InteractionWrapper, SettingCardContainer,
    SettingContainer, TextWrapper, UserImg } from '../styles/settings-style'
import { FlatList } from 'react-native-gesture-handler';

const SettingList=[
    {
        id:'1',
        name: 'Profile',
        icon: 'none',
        link: require('../assets/images/person3.jpg'),
        definition: 'Name, Date, description information',
    },
    {
        id:'2',
        name: 'Theme',
        icon: 'color-palette-outline',
        link: 'none',
        definition: 'Light Mode',
    },
    {
        id:'3',
        name: 'Help Center',
        icon: 'md-help-circle-outline',
        link: 'none',
        definition: 'get help if you have inquires or issues',
    },
    {
        id:'4',
        name: 'Privacy',
        icon: 'ios-lock-closed-outline',
        link: 'none',
        definition: 'account password, data security',
    },
    {
        id:'5',
        name: 'Notifications',
        icon: 'notifications-outline',
        link: 'none',
        definition: 'change notification setup',
    },
]

function SettingCard({item}){
    return(
        <SettingCardContainer>
            <InteractionWrapper>
                {item.link!=='none'?<UserImg source={item.link}/>:<Ionicons name={item.icon} size={30} />}
                <TextWrapper>
                    <HeaderText>{item.name}</HeaderText>
                    <GeneralText>{item.definition}</GeneralText>
                </TextWrapper>
            </InteractionWrapper>
        </SettingCardContainer>
    )
}

export default function SettingsSection(){
    return (
    <SettingContainer>
        <FlatList
        data={SettingList}
        renderItem={({item})=> SettingCard({item})}
        />
    </SettingContainer>
    )
}
