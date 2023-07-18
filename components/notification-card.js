import {React} from 'react'
import {Note,UserImg,UserInfo,UserName, UserInfoText, PostTime, PostText, PostImg, InteractionWrapper, Interaction, InteractionText, Divider, PostNickName, UserNameTag} from '../styles/notification-style.js'
import { TouchableOpacity } from 'react-native-gesture-handler';


const NotificationCard=({item,navigation})=>{

    return(
            <Note title="Local Modules">
                <TouchableOpacity
                onPress={()=>{navigation.navigate('Profile',{userItem: item})}}
                >
                    <UserInfo>
                        <UserImg source={item.userImg} />
                        <UserInfoText>
                            <UserNameTag>
                                <UserName>
                                    {item.userName}
                                </UserName>
                                <PostNickName>@{item.userName}</PostNickName>
                            </UserNameTag>
                            <PostTime>{item.postTime}</PostTime><PostTime/>
                        </UserInfoText>
                    </UserInfo>
                </TouchableOpacity>
                <PostText>{item.post}</PostText>
            </Note>
    );
}

export default NotificationCard