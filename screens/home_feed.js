import {React} from 'react'
import {FlatList} from 'react-native'
import {Container} from '../styles/feedStyles.js'
import ListSectionFeedCard from '../components/feed_card'
import Posts from '../dataSource/feed-data.js'


export default function HomeFeed(){
    return (
        <Container>
            <FlatList
            data = {Posts}
            renderItem={({item})=> <ListSectionFeedCard item={item}/>}
            keyExtractor={item=>item.id}
            showsVerticalScrollIndicator={false}
            />
        </Container>
    )
}
