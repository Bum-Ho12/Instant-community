import {React} from 'react'
import {Ionicons} from '@expo/vector-icons';
import {Note,UserImg,UserInfo,UserName, UserInfoText, PostTime, PostText, PostImg, InteractionWrapper, Interaction, InteractionText, Divider, PostNickName, UserNameTag} from '../styles/notification-style.js'


const NotificationCard=({item})=>{

    return(
            <Note title="Local Modules">
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
                <PostText>{item.post}</PostText>
            </Note>
    );
}

export default NotificationCard