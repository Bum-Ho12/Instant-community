import React, { useState } from 'react'
import {View} from 'react-native'
import CommentComponent from '../../components/comment-section'
import { ScrollView } from 'react-native'
import Posts from '../../dataSource/feed-data.js'
import CommentCard from '../../components/comment-layout-component'
import ListSectionFeedCard from '../../components/feed_card'


const PostViewScreen=({navigation,route})=>{
    const [comment,setComment] = useState()
    return(
        <ScrollView>
            <View>
                <ListSectionFeedCard
                item={route.params.item} navigation={navigation}/>
                <CommentComponent
                    labelValue={comment}
                    placeholder='comment here'
                    onChangedText = {(value) => setComment(value)}
                    autoCorrect = {true}
                />
                {Posts.map((content)=> (
                        <CommentCard
                        key={content.id}
                            item={content} navigation={navigation}
                        />
                    ))}
            </View>
        </ScrollView>
    )
}

export default PostViewScreen

