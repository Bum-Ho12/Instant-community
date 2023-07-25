import {React} from 'react'
import {Ionicons} from '@expo/vector-icons';
import { GeneralText, HeaderText, InteractionWrapper, SettingCardContainer,
    SettingContainer, TextWrapper} from '../../styles/settings-style'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const PrivacyList=[
    {
        id:'1',
        name: 'Update Password',
        icon: 'key-outline',
        definition: 'Change/Update Password',
    },
    {
        id:'2',
        name: 'Account Recovery',
        icon: 'file-tray-outline',
        definition: 'Recovery email or Tel Number',
    },
    {
        id:'3',
        name: 'Biometric Authentication',
        icon: 'md-finger-print',
        definition: 'Enable FingerPrint Authentication',
    },
    {
        id:'4',
        name: 'Delete Account',
        icon: 'remove-circle-outline',
        definition: 'Permanent deletion of account',
    },
]

function SettingCard({item,navigation}){
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
                </InteractionWrapper>
            </TouchableOpacity>
        </SettingCardContainer>
    )
}

const PrivacySection=({navigation})=>{
    return (
    <SettingContainer>
        <FlatList
        data={PrivacyList}
        renderItem={({item})=> SettingCard({item,navigation})}
        />
    </SettingContainer>
    )
}

export default PrivacySection
