import React,{useState} from 'react'
import { Container,UserInfo } from '../styles/profile-edit'
import UserFormInput from '../components/user-profile-form-input'
import { ScrollView } from 'react-native'

const EditProfileScreen = () =>{
    const [fname,setFname] = useState()
    const [lname,setLname] = useState()
    const [tagname,setTagname] = useState()
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Container>
                <UserInfo>
                    <UserFormInput
                    labelValue={fname}
                    placeholder='First Name'
                    onChangedText = {(value) => setFname(value)}
                    autoCapitalize = 'words'
                    autoCorrect = {true}
                    />
                    <UserFormInput
                    labelValue={lname}
                    placeholder='Last Name'
                    onChangedText = {(value) => setLname(value)}
                    autoCapitalize = 'words'
                    autoCorrect = {true}
                    />
                    <UserFormInput
                    labelValue={tagname}
                    placeholder='Tag Name'
                    onChangedText = {(value) => setTagname(value)}
                    autoCapitalize = 'none'
                    autoCorrect = {false}
                    />
                </UserInfo>
            </Container>
        </ScrollView>
    )
}

export default EditProfileScreen