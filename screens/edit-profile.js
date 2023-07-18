import React,{useState} from 'react'
import { Container,UserInfo } from '../styles/profile-edit'
import UserFormInput from '../components/user-profile-form-input'
import { ScrollView } from 'react-native'

const EditProfileScreen = () =>{
    const [fname,setFname] = useState()
    const [lname,setLname] = useState()
    const [tagname,setTagname] = useState()
    const [about, setAbout] = useState()
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Container>
                <UserFormInput
                    title={'First Name'}
                    labelValue={fname}
                    placeholder='First Name'
                    onChangedText = {(value) => setFname(value)}
                    autoCapitalize = 'words'
                    autoCorrect = {true}
                    />
                <UserFormInput
                    title={'Last Name'}
                    labelValue={lname}
                    placeholder='Last Name'
                    onChangedText = {(value) => setLname(value)}
                    autoCapitalize = 'words'
                    autoCorrect = {true}
                    />
                <UserFormInput
                    title={'Nick Name'}
                    labelValue={'@'+ tagname}
                    placeholder='Tag Name'
                    onChangedText = {(value) => setTagname(value)}
                    autoCapitalize = 'none'
                    autoCorrect = {false}
                    />
                <UserFormInput
                    title={'About You'}
                    labelValue={about}
                    placeholder='talk about yourself, expertise and achievements'
                    onChangedText = {(value) => setAbout(value)}
                    autoCapitalize = 'none'
                    autoCorrect = {false}
                    />
            </Container>
        </ScrollView>
    )
}

export default EditProfileScreen