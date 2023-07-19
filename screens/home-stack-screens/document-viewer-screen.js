import React from 'react'
import {StyleSheet,View,Image} from 'react-native'
import {Feather,Ionicons} from '@expo/vector-icons'
import {styled} from 'styled-components'
import {UserInfo,UserName,UserImg,UserNameTag,
    PostNickName,UserInfoText,PostTime} from '../../styles/feedStyles.js'


const DocViewerScreen =({route})=>{
    item = route.params.item
    ikeIcon = item.liked?'heart':'heart-outline'
    lickedColor = route.params.item.liked?'#2e64e5':'#333'

    if(route.params.item.likes==1){
        likeText = '1'
    }else if(route.params.item.likes>1){
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
        <View style={styles.container} >
            <View style={styles.docInteractionWrapper}>
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
                <Interaction>
                    <FollowInteractionText >Follow</FollowInteractionText>
                </Interaction>
            </View>
            <Image
                style={styles.Img}
                resizeMode= {'contain'}
                source = {item.postImg}
            />
            <View style={styles.docInteractionWrapper}>
                <Interaction
                    onPress={()=>alert('download this image')}
                >
                    <Feather name='share-2' size={24} color={'#2e64e5'}/>
                    <InteractionText>
                        Share
                    </InteractionText>
                </Interaction>
                <Interaction
                    onPress={()=>alert('download this image')}
                >
                    <Feather name='download' size={24}color={'#2e64e5'}/>
                    <InteractionText>
                        Download
                    </InteractionText>
                </Interaction>
            </View>
            <View style={styles.docInteractionWrapper}>
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
            </View>
        </View>
    )
}

export default DocViewerScreen

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        flex:1,
        alignContent: 'center',
        alignItems:'center',
        padding: 10,
        backgroundColor: '#fff',
    },
    docInteractionWrapper:{
        flexDirection: 'row',
        justifyContent:'space-around',
        width: '100%',
        marginVertical: 5,
        marginHorizontal: 5,
    },
    Img:{
        width: '95%',
        height: '70%',
        marginTop: 10,
    }
})

const Interaction = styled.TouchableOpacity`
    flex-direction: column;
    justify-content:center;
    align-items:center;
    border-radius: 5px;
    padding: 5px;
    background-color: transparent;
`
const InteractionText = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color:#2e64e5;
    margin-top: 5px;
    margin-left: 5px;
`

const FollowInteractionText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color:#2e64e5;
    margin-top: 5px;
    margin-left: 5px;
`
