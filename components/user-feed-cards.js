import {React} from 'react'
import { TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {Tweet,UserImg,UserInfo,UserName,
    UserInfoText, PostTime, PostText, PostImg,
    InteractionWrapper, Interaction, InteractionText,
    Divider, PostNickName, UserNameTag} from '../styles/feedStyles.js'
import VideoPlayer from './video-player.js';


const UserListSectionFeedCard=({item, navigation})=>{
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

    if(item.saves==1){
        savedText = '1'
    }else if(item.saves>1){
        savedText = item.saves
    }else{
        savedText = ''
    }

    if(item.shares==1){
        sharedText = '1'
    }else if(item.shares>1){
        sharedText = item.shares
    }else{
        sharedText = ''
    }

    if(item.docViews==1){
        docText = '1'
    }else if(item.docViews>1){
        docText = item.docViews
    }else{
        docText = ''
    }

    return(
            <Tweet title="Local Modules">
                <UserInfo>
                    <TouchableOpacity
                        onPress={()=>{navigation.navigate('Profile',{userItem: item})}}
                    >
                        <UserImg source={item.userImg} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{navigation.navigate('Profile',{userItem: item})}}
                    >
                        <UserInfoText>
                            <UserNameTag>
                                <UserName>
                                    {item.userName}
                                </UserName>
                                <PostNickName>@{item.userName}</PostNickName>
                            </UserNameTag>
                            <PostTime>{item.postTime}</PostTime><PostTime/>
                        </UserInfoText>
                    </TouchableOpacity>
                    </UserInfo>
                <TouchableOpacity onPress={()=>{navigation.navigate('PostView',{item:item})}}>
                    <PostText>{item.post}</PostText>
                    {item.postImg!=='none'?<TouchableOpacity
                    onPress={()=> navigation.navigate('MediaView',{item:item})}
                    >
                        <PostImg source={item.postImg}/>
                    </TouchableOpacity>:<Divider/>}
                    {item.video!=='none'?<TouchableOpacity
                    onPress={()=> navigation.navigate('MediaView',{item:item})}
                    >
                        <VideoPlayer url={item.video}/>
                    </TouchableOpacity>:<Divider/>}
                </TouchableOpacity>
                <InteractionWrapper>
                    <Interaction active={item.liked}>
                        <Ionicons name={likeIcon} size={22} color={lickedColor} />
                        <InteractionText active={item.liked}>{likeText}</InteractionText>
                    </Interaction>
                    <Interaction>
                        <Ionicons name='chatbox-ellipses-outline' size={22} />
                        <InteractionText >{commentText}</InteractionText>
                    </Interaction>
                    <Interaction>
                        <Ionicons name='save-outline' size={22} />
                        <InteractionText >{savedText}</InteractionText>
                    </Interaction>
                    <Interaction>
                        <Ionicons name='document-outline' size={22} />
                        <InteractionText >{docText}</InteractionText>
                    </Interaction>
                    <Interaction>
                        <Ionicons name='share-social-outline' size={22} />
                        <InteractionText >{sharedText}</InteractionText>
                    </Interaction>
                    <Interaction>
                        <Ionicons name='trash-outline' size={25} />
                    </Interaction>
                </InteractionWrapper>
            </Tweet>
    );
}

export default UserListSectionFeedCard