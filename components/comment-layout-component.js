import {React} from 'react'
import {Ionicons} from '@expo/vector-icons'
import {UserImg,UserInfo,UserName, UserInfoText, PostTime, PostText, PostImg,
    InteractionWrapper, Interaction, InteractionText, Divider, PostNickName, UserNameTag} from '../styles/feedStyles.js'
import { TouchableOpacity } from 'react-native';
import { Tweet } from '../styles/feedStyles.js';


const CommentCard=({item,navigation})=>{
    likeIcon = item.liked?'heart':'heart-outline'
    lickedColor = item.liked?'#2e64e5':'#333'

    if(item.likes==1){
        likeText = '1'
    }else if(item.likes>1){
        likeText = item.likes
    }else{
        likeText = ''
    }

    if(item.comments==1){
        commentText = '1'
    }else if(item.comments>1){
        commentText = item.comments
    }else{
        commentText = ''
    }

    return(
            <Tweet title="Comments">
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
                <Divider/>
                <InteractionWrapper>
                    <Interaction>
                        <Ionicons name={likeIcon}
                            size={22} color={lickedColor}
                        />
                        <InteractionText active={item.liked}>{likeText}</InteractionText>
                    </Interaction>
                    <Interaction>
                        <Ionicons name='chatbox-ellipses-outline' size={22} />
                        <InteractionText >{commentText}</InteractionText>
                    </Interaction>
                </InteractionWrapper>
            </Tweet>
    );
}

export default CommentCard